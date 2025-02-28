function queryServers(serverName, q){
    const promise1 = new Promise(()=>`/${serverName}?q=${q}`);
    const promise2 = new Promise(()=>`/${serverName}_backup?q=${q}`);
    return Promise.race([promise1, promise2]);
};