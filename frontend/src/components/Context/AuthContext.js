import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:4300/auth');
                setUser(response.data);
            } catch (error) {
                // Handle errors if needed
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:4300/login', credentials);
            setUser(response.data);
        } catch (error) {
            console.error("Login failed", error);
            // Handle login failure
        }
    };

    const logout = () => {
        setUser(null);
        // Optionally, clear any session data
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };