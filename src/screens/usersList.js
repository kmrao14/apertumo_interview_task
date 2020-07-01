import React, { useState, useEffect, useReducer } from 'react';
import AppHeader from '../components/AppHeader';
import UserCard from '../components/UserCard';
import { get } from '../services/apiService';
import { USERS } from '../config/apiLocations';
import loaderImg from '../assets/images/loader.gif';
import { FilterReducer, initialState, actionConstants } from '../forms-reducers/filtersReducer';
import { getAllUsers, filterUsers } from '../redux/actions/usersActions';
import { useSelector, useDispatch } from 'react-redux';

const UsersList = props => {

   const [loading, setLoading] = useState(false);
   const users = useSelector(store => store.filteredUsers);
   const dispatch = useDispatch();
   const [filters, setFilters] = useReducer(FilterReducer, initialState);

   const getUsers = async () => {

      setLoading(true);
      const response = await get(USERS);
      if (response) dispatch(getAllUsers(response));
      setLoading(false);

   }

   const handelFilters = () => {
      dispatch(filterUsers(filters));
   }

   const handleChange = (type, payload) => {
      setFilters({ type, payload })
   }

   useEffect(() => {
      getUsers();
   }, [])


   return (
      <>
         <AppHeader history={props.history} />
         <div className="container">
            <div className="userslist-container">
               <div className="filters-container">
                  <div className="filters-controles">
                     <div className="filters-heading"><p>Filters</p></div>
                     <div className="filters-age">
                        <label>Age</label>
                        <div>
                           <input type="number" placeholder="Min age"
                              onChange={(event) => {
                                 handleChange(actionConstants.UPDATE_MIN_AGE, event.target.value)
                              }}
                           />
                           <input type="number" placeholder="Max age"
                              onChange={(event) => {
                                 handleChange(actionConstants.UPDATE_MAX_AGE, event.target.value)
                              }}
                           />
                        </div>
                     </div>

                     <div className="filters-name">
                        <label>Max letters in name</label>
                        <div>
                           <input type="number" placeholder="Max letters in name"
                              onChange={(event) => {
                                 handleChange(actionConstants.UPDATE_NO_LETTERS, event.target.value)
                              }}
                           />
                        </div>
                     </div>
                     <div>
                        <button className="filters-btn" onClick={handelFilters}>Filter</button>
                     </div>
                  </div>
               </div>

               <div className="list-row list-head">
                  <div className="head-col user-firstname">First Name</div>
                  <div className="head-col user-lastname">Last Name</div>
                  <div className="head-col user-age">Age</div>
               </div>
               {loading &&
                  <div className="loading-placeholder">
                     <p>Loading</p>
                     <img src={loaderImg} alt="" />
                  </div>
               }

               {users && users.length != 0 &&
                  users.map(user => (
                     <UserCard key={user.accountId} userInfo={user} />
                  ))
               }

               {!loading && users.length === 0 &&
                  <p className="empty-placeholder ">No users found</p>
               }
            </div>
         </div>
      </>
   )
}

export default UsersList;