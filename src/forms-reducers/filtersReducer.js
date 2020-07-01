const initialState = {
   minAge: 0,
   maxAge: Infinity,
   noLetters: Infinity
}

const actionConstants = {
   UPDATE_MIN_AGE: 'UPDATE_MIN_AGE',
   UPDATE_MAX_AGE: 'UPDATE_MAX_AGE',
   UPDATE_NO_LETTERS: 'UPDATE_NO_LETTERS'
}

const FilterReducer = (state, action) => {
   switch (action.type) {
      case actionConstants.UPDATE_MIN_AGE:
         return {
            ...state,
            minAge: action.payload != '' ? action.payload : 0,
         }

      case actionConstants.UPDATE_MAX_AGE:
         return {
            ...state,
            maxAge: action.payload != '' ? action.payload : Infinity,
         }

      case actionConstants.UPDATE_NO_LETTERS:
         return {
            ...state,
            noLetters: action.payload != '' ? action.payload : Infinity,
         }
         
      default:
         return state
   }
}

export { FilterReducer, initialState, actionConstants }
