import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

function GetInitialState() {
    const data = localStorage.getItem('userContext');

    return data ? JSON.parse(data) : null;
}

export function UserContextProvider(props) {
    const [user, setUser] = useState(GetInitialState);

    useEffect(() => {
        localStorage.setItem('userContext', JSON.stringify(user));
    }, [user]);

    function SetUser(username, email, token) {
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