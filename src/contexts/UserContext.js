import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

const GetInitialState = () => {
    const data = localStorage.getItem('userContext');

    return data ? JSON.parse(data) : null;
}

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(GetInitialState);

    useEffect(() => {
        localStorage.setItem('userContext', JSON.stringify(user));
    }, [user]);

    const SetUser = (username, email, token) => {
        const user = {
            username,
            email,
            token
        }

        setUser(user);
    }

    const ClearUser = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, SetUser, ClearUser }}>
            {props.children}
        </UserContext.Provider>
    )
}