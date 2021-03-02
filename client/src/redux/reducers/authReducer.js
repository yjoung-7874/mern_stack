import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, 
        LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
        LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, 
        USER_LOADING_FAILURE, USER_LOADING_SUCCESS, USER_LOADING_REQUEST, 
        REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../types"

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errorMsg: "",
  successMsg: ""
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: "",
        isLoading: true
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token")
      return {
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: "",
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)  
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: ""
      };
    case REGISTER_FAILURE:
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
      localStorage.removeItem("token")
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg
      };
    case CLEAR_ERROR_REQUEST:
      return {
        ...state,
      };
    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        errorMSG: null,
      };
    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMSG: "Clear error failed",
      };
    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        userId: action.payload._id,
        userName: action.payload.name,
        userRole: action.payload.role
      };
    case USER_LOADING_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: "",
      };
    default:
      return state
  }
}

export default authReducer