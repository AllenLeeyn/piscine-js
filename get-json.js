function getJSON(path, params){
    const pathQueries = new URLSearchParams(params);
    const pathWithQueries = `${path}?${pathQueries.toString()}`;

    let  errorMsg;
    return fetch(pathWithQueries)
            .then((response) => {
                if (!response.ok) {
                    errorMsg = response.statusText;
                    throw Error(response.statusText)
                };
                return response.json();
            })
            .catch((error) => {throw error})
            .then((json) => {
                return{data: json, error: errorMsg}
            });
    };