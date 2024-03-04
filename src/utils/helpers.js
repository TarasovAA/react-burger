import { baseUrl } from "../constants/common";

export function handleRequest(url, options = {}) {
    return fetch(url, options)
            .then(result => {
                if (!result.ok)
                    return Promise.reject(`Ошибка ${result.status}`);

                return result.json();
            })
            .then(data => {
                console.log(data);

                return data;
            })
}

export const fetchWithRefresh = async (url, options) => {
    try{
        const res = await fetch(url, options);

        return await checkReponse(res); 
    }
    catch (err){
        if (err.message === "jwt expired"){
            const refreshData = await refreshToken();
            
            options.headers.authorization = refreshData.accessToken;

            const res = await fetch(url, options);
            return await checkReponse(res);
        }
    }
}
export const refreshToken = async () => {
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
        
          console.log();
        localStorage.setItem("refreshToken", refreshData.refreshToken); 
        localStorage.setItem("accessToken", refreshData.accessToken.split("Bearer ").pop());

        return refreshData;
    })
}

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

  export function handleSighInRequest(url, options = {}) {
    return fetch(url, options)
            .then(result => {
                if (!result.ok)
                    return Promise.reject(`Ошибка ${result.status}`);

                return result.json();
            })
            .then(data => {
                localStorage.setItem("refreshToken", data.refreshToken); 
                localStorage.setItem("accessToken", data.accessToken);

                return data;
            })
    // тут проверка ответа
}
