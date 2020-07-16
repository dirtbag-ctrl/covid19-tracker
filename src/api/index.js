import axios from 'axios';// used to make API Request
const url = 'https://covid19.mathdro.id/api';// API Url 

//functions to fetch Data form API 

// fetch data from API Url 
export const fetchData = async (country) => {

    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;//changes url dynamically base on picker value

    }

    //if catch succesfull
    try {
        // pass in data with objects 
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        //return  specific data 
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error);

    }
}

//gets daily data for chart 
export const fetchDailyData = async () => {
    //if catch succesfull
    try {
        const { data } = await axios.get(`${url}/daily`);
        
        //gets specific data
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData; //return all modified data for chart usage

    } catch (error) {
        console.log(error);

    }
}

// gets countries from API 
export const fetchCountries = async () => {
    // if catch successful
    try {
        //gets specific data
        const { data: {countries} } = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}