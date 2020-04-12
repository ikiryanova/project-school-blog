import API from "src/api";
import { push } from 'connected-react-router';

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGN-IN_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const signInAction = (dataForm) => {
  return async function(dispatch) {
    try{
      dispatch({ type: 'SIGN-IN_REQUEST' });
      const response = await API.user.signIn(dataForm);
      dispatch({ type: 'SIGN-IN_SUCCESS', payload: response.data });
      dispatch(push('/'));
    } catch (error) {
      if (error.response) {
        dispatch({ type: 'SIGN-IN_FAIL', payload: error.response.data });
      }
    }
    // catch (error) {
    //   dispatch({ type: 'SIGN-IN_FAIL' }); 
    // }
  }
}