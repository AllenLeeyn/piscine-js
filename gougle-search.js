async function queryServers(serverName, q){
    const promise1 = new Promise(()=>`/${serverName}?q=${q}`);
    const promise2 = new Promise(()=>`/${serverName}_backup?q=${q}`);
    return Promise.race([promise1, promise2]);
};

function gougleSearch(q){
    const webUrl = queryServers('web', q);
    const imageUrl = queryServers('image', q);
    const videoUrl = queryServers('video', q);

    return {web: getJSON(webUrl), image: getJSON(imageUrl), video: getJSON(videoUrl)};
};