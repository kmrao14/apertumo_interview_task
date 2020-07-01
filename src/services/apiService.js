import { USER_TOKEN } from '../config/localkeys';
import history from "../utility/history";

// Authentication service
export const authenticate = async (endpoint, payload) => {
   try {
      const response = await fetch(endpoint, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload)
      });

      if (response.status === 200) {
         const data = await response.json();
         //console.log('Login', data);
         return data;

      } else if (response.status === 403) {
         //console.log('Invalid username or password')
         return { error_message: 'Invalid username or password' };

      } else {
         //console.log('Something went wrong please try again');
         return { error_message: 'Something went wrong please try again' };
      }
   } catch (err) {
      console.log("Failed to Authenticate", { endpoint, error: err });
   }
}

// fetch  - get
export const get = async (endpoint) => {
   try {
      const token = localStorage.getItem(USER_TOKEN);
      const response = await fetch(endpoint, {
         method: 'GET',
         headers: {
            'Authorization': `Bearer ${token}`
         }
      });
      
      //console.log("Successfully fetched", { endpoint, data })

      if (response.status === 200) {
         return response.json()
      } else if (response.status === 403) {
         localStorage.removeItem(USER_TOKEN);
         history.push("/?msg=session expired please login again");
         //return
      }

   } catch (err) {
      console.log("Failed to fetch", { url: endpoint, error: err })
   }
}
