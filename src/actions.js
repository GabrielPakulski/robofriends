import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_FAILED,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_PENDING } from "./constants"


// returns an object that has a type (the action) 
// and sends whatever data is needed
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

//thunk-middleware will act upon this because it returns a function
export const requestRobots = () => (dispatch) => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING
    })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
