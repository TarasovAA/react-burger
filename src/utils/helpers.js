
export function handleRequest(url, options = {}) {
    return fetch(url, options)
            .then(result => {
                if (!result.ok)
                    return Promise.reject(`Ошибка ${result.status}`);
                return result.json();
            })
    // тут проверка ответа
}