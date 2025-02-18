const hasCity = (country, cities) => (city) =>{
    for (const curCity of cities){
        if (city === curCity) return city + ' is a city from '+country;
    };
    return city + ' is not a city from '+country;
};
