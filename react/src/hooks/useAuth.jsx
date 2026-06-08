import { useState } from 'react';

const API_URL = "https://api-production-7c6b.up.railway.app/api"

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState("")

    const login = async (user) => {
        try {
            const res = await fetch(API_URL + '/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            const data = await res.json();
            setIsLogin(data.login)
            setUser(data.user)
            setToken(data.token)
            return data;
        } catch (error) {
            console.error(error)
            return { login: false }
        }
    }
    const logout = () => {
        setIsLogin(false)
        setUser({})
        setToken("")
    }
    return {isLogin, user, token, login, logout}
}

export default useAuth;