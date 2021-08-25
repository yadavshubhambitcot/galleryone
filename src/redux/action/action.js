import axios from "axios";

export const UserData = () => async (dispatch) => {
    try {
         const response =  await axios.get(
           "https://jsonplaceholder.typicode.com/users"
         );
        console.log("res",response)
        dispatch({
           type:"USERDATA",
            payload:response.data
        })
    }
    catch(e) {
        dispatch({
            type:"Error",
            payload:console.log("error",e)
        })
     }

}

export const imgData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    console.log("response", response);
    dispatch({
      type: "IMGDATA",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "Error",
      payload: console.log("error", e),
    });
  }
};