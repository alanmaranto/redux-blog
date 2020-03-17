import axios from "axios";
import { userTypes } from "../types/users";

export const fetchAllUsers = () => async dispatch => {

  dispatch({
    type: userTypes.LOADING,
  });

  try {
    const response = await axios.get(
      "https://jsonplacehoflder.typicode.com/users"
    );
    dispatch({
      type: userTypes.FETCH_USERS,
      payload: response.data
    });
  } catch (error) {
    console.log('Error', error.message);
    dispatch({
      type: userTypes.ERROR,
      payload: `Users's information not available`
    })
  }
};

export default fetchAllUsers;
