import { useContext, createContext, useReducer } from "react";
import AuthReducer from '../reducer/AuthReducer'
import * as API from '../api/auth.api'

const AuthContext = createContext();

// componente funcional
export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, { isAuthenticated: false, user: null });

    function login(mail, pass) {
        API.login(mail, pass)
        .then(function (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            dispatch({ type: 'LOGIN', payload: data.user })
        })
        .catch(function (err) {
            console.log(JSON.stringify(err))
        })
    }

    function logout(){
        console.log("AuthContext: LOGOUT")
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT', payload: null })
    }

    return (
        <AuthContext.Provider value={{ state, dispatch, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}