import axios from 'axios';

var openWeatherAPIKey = '06020ebbdb3ccb92d40f919f5efe4359',
    openWeatherAPIKey = 'b714ec74bbab5650795063cb0fdf5fbe',
    openWeatherPayloadURL = 'http://api.openweathermap.org/data/2.5/';

function getQueryStringObject(city) {
    return {
        APPID: openWeatherAPIKey,
        q: city,
        type: 'accurate',
        cnt: 5
    }
}

function getForecastPayload(city) {
    var queryStringObj = getQueryStringObject(city),
        url = getSerializedURL('forecast/daily', queryStringObj);

    return axios.get(url)
        .then(function (forecastData) {
            return forecastData.data
        })
}

function getQueryString(queryStringObj) {
    return Object.keys(queryStringObj).reduce(function(a,k){
        a.push(k+'='+encodeURIComponent(queryStringObj[k]));
        return a;
    },[]).join('&');
}

function getSerializedURL(type, queryStringObj) {
    return openWeatherPayloadURL + type + '?' + getQueryString(queryStringObj);
}

export default {
    getForecastPayload: getForecastPayload
};