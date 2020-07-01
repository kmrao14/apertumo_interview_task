import React, { useState, useEffect } from 'react';
import { authenticate } from '../services/apiService';
import { LOGIN } from '../config/apiLocations';
import { USER_TOKEN } from '../config/localkeys';

const Login = props => {

   const [loading, setLoading] = useState(false);
   const [userName, setUserName] = useState();
   const [password, setPassword] = useState();
   const [formErrors, setFormErrors] = useState({ userName: '', password: '' });
   const [httperrors, setHttperrors] = useState(null);


   const handelChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let validationErrors = { ...formErrors }

      switch (name) {
         case 'userName':
            validationErrors.userName = value === "" ? "User name should not be empty" : "";
            setUserName(value);
            break;
         case 'password':
            validationErrors.password = value === "" ? "Enter a valid password" : "";
            setPassword(value);
            break;
         default:
            break;
      }
      setFormErrors(validationErrors);

   }

   const handelLogin = async (event) => {

      event.preventDefault();
      setLoading(true);

      if (userName && password) {
         let payload = {
            accountId: userName,
            pswd: password
         }

         let loginResponse = await authenticate(LOGIN, payload);
         console.log({ loginResponse });

         if (loginResponse && loginResponse.token) {
            localStorage.setItem(USER_TOKEN, loginResponse.token);
            props.history.push('/users');
         } else if (loginResponse && loginResponse.error_message) {
            setHttperrors(loginResponse.error_message)
         }


      } else {
         alert('Enter valid username and password')
      }

      setLoading(false);

   }


   return (
      <div className="container">
         <div className="login-container">
            <h1 className="login-heading">Sign into your account</h1>
            {httperrors &&
               <p className="errormsgs">{httperrors}</p>
            }
            <div className="login-controls">
               <div className="form-group">
                  <label>User name</label>
                  <input type="text" className="form-input" name="userName"
                     onChange={(event) => handelChange(event)}
                  />
               </div>
               <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-input" name="password"
                     onChange={(e) => handelChange(e)}
                  />
               </div>
               <div className="form-group">
                  <button className={`btn-login ${loading ? "btn-loading" : ""}`} disabled={loading}
                     onClick={(e) => handelLogin(e)}
                  >{loading ? '' : 'Login'}</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login;