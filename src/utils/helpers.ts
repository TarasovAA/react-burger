import { baseUrl } from "../constants/common";

export function handleRequest<T>(url: string, options:RequestInit = {}) : Promise<T> {
    return fetch(url, options)
            .then(checkReponse)
            .then(data => {
                console.log(data);

                return data;
            })
}

export const fetchWithRefresh = async (url: string, options: any) : Promise<any>=> {
    try{
        const res = await fetch(url, options);

        return await checkReponse(res); 
    }
    catch (err: any){
        if (err.message === "jwt expired"){
            const refreshData = await refreshToken();
            
            options.headers.authorization = refreshData.accessToken;

            const res = await fetch(url, options);
            return await checkReponse(res);
        }
    }
}
export const refreshToken = async () : Promise<any> => {
    return await fetch(`${baseUrl}/api/auth/token`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        })
    })
    .then(checkReponse)
    .then((refreshData) => {
        if (!refreshData.success) {
            return Promise.reject(refreshData);
          }
          
        localStorage.setItem("refreshToken", refreshData.refreshToken); 
        localStorage.setItem("accessToken", refreshData.accessToken.split("Bearer ").pop());

        return refreshData;
    })
}

const checkReponse = (res: Response): Promise<any> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

  export function handleSighInRequest(url: string, options: any = {}) {
    return fetch(url, options)
            .then(checkReponse)
            .then(data => {
                localStorage.setItem("refreshToken", data.refreshToken); 
                localStorage.setItem("accessToken", data.accessToken);

                return data;
            })
}
