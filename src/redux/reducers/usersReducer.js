const initState = {
   users: [],
   filteredUsers: []
}

export const usersReducer = (state = initState, action) => {
   switch (action.type) {
      case 'GET_USERS':
         return {
            ...state,
            users: action.payload,
            filteredUsers: action.payload
         }
      case 'FILTER_USERS':
         return {
            ...state,
            filteredUsers: state.users.filter(user => (
               user.age >= action.payload.minAge && 
               user.age <= action.payload.maxAge && 
               (user.firstName.length + user.lastName.length) <= action.payload.noLetters
            ))
         }
      default:
         return state
   }
}