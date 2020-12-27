import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  shippingAddress: null,
  orderHistory: [],
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOG_IN_START:
    case UserActionTypes.LOG_OUT_START:
    case UserActionTypes.REGISTER_START:
      return { ...state, isLoading: true };
    case UserActionTypes.LOG_IN_FAILURE:
    case UserActionTypes.REGISTER_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case UserActionTypes.LOG_IN_SUCCESS:
    case UserActionTypes.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload, error: null };
    case UserActionTypes.LOG_OUT_SUCCESS:
      return { ...state, currentUser: null, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
