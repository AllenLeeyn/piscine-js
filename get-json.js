function getJSON(path, params){
    const pathQueries = new URLSearchParams(params);
    const pathWithQueries = `${path}?${pathQueries.toString()}`;

   return  fetch(pathWithQueries)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .catch((error) => {throw error;});
};