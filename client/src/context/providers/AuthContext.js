import { createContext, useContext, useReducer } from "react";
import { signUp, profile } from "../../api/userApi";
import { initialState } from "../reducer/authReducer";
import { authReducer } from "../reducer/authReducer";
import { AuthActions } from "../actions/authActions";

export const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signup = async ({ email, password }) => {
    try {
      dispatch({ type: AuthActions.AUTH_SIGNUP });
      const res = await signUp({ email, password });
      console.log(res.data);

      const { token } = res.data;

      const resUser = await profile(token);

      dispatch({
        type: AuthActions.AUTH_SIGNUP_SUCCESS,
        payload: {
          token,
          user: resUser.data,
        },
      });
    } catch (error) {
      if (error.response.data) {
        dispatch({
          type: AuthActions.AUTH_SIGNUP_ERROR,
          payload: error.response.statusText,
        });
      }
    }
  };
  return (
    <AuthContext.Provider value={{ ...state, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
