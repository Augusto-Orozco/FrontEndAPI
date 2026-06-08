import { useState, useCallback } from "react"

const API_URL = "https://api-production-7c6b.up.railway.app/api"

const useAdmin = (token) => {
    const [users, setUsers] = useState([])

    const getUsers = useCallback(async () => {
        if (!token) return
        try {
            const res = await fetch(API_URL + "/users", {
                headers: { authorization: token }
            })
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }, [token])

    const delUser = async (id) => {
        try {
            // Optimistic update
            const updatedUsers = users.filter((u) => u._id !== id)
            setUsers(updatedUsers)
            
            await fetch(API_URL + "/users/" + id, {
                method: "DELETE",
                headers: { authorization: token }
            })
        } catch (error) {
            console.error("Error deleting user:", error)
            getUsers() // Rollback on error
        }
    }

    const addUser = async (newUser) => {
        try {
            const res = await fetch(API_URL + "/users", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json", 
                    authorization: token 
                },
                body: JSON.stringify(newUser)
            })
            const data = await res.json()
            setUsers((prevUsers) => [...prevUsers, data])
        } catch (error) {
            console.error("Error adding user:", error)
        }
    }

    return { users, getUsers, delUser, addUser }
}

export default useAdmin