export const getUsers = () => {
   return (dispatch) => {
       fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
           .then(data => dispatch({type: 'GET_USERS',payload: data}));
   }
}