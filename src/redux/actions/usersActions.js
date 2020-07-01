//import { get } from '../../services/apiService';

export const getAllUsers = data => {
   return {
      type: 'GET_USERS',
      payload: data
   }
}

export const filterUsers = data => {
   return {
      type: 'FILTER_USERS',
      payload: data
   }
}

// export const fetchUsers = () => {
//    return async dispatch => {
//       const response = await get(USERS);
//       dispatch(getAllUsers(response));
//    }
// }