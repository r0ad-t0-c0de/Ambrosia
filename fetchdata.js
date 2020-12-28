const axios = require('axios');

const url="https://covid19.mathdro.id/api";

const fetchdata=async()=>{
    
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdate};
    }
    catch(error){
        
    }  
}

const fetchDailyData=async()=>{
    try{
        const {data}=await axios.get(`${url}/daily`);
        
        console.log(data);
    }
    catch(error){
        
    }
}

module.exports.fetchdata = fetchdata;
module.exports.fetchDailyData = fetchDailyData;