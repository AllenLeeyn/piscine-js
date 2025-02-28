function getJSON(path, params){
    const pathQueries = new URLSearchParams(params);
    const pathWithQueries = `${path}?${pathQueries.toString()}`;

    return fetch(pathWithQueries)
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then((json) => {
                if (json.error !== undefined) return json.error;
                return json.data;
            })
    };