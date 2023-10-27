export const getWeather = (city='',country='') => {
    const API_KEY = '8709292d2f8e3f6e909b842ce0ecd818';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
   return (dispatch) => {
       const url = API_URL + `q=${city}${country === '' ? '' : `,${country}`}&appid=${API_KEY}`;
       fetch(url).then(response => response.json())
           .then(data => {
               dispatch({type:'GET_WEATHER',payload:data});
           })
           .catch((error) => {
               if (error.code === 400) {
                   dispatch({type:'GET_WEATHER',payload:null});
               }
               console.error(error)
           });
   }
}