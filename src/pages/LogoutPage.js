import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
    const navigate = useNavigate();

    const { ClearUser } = useContext(UserContext);

    useEffect(ClearUser);

    return (
        navigate('/')
    );
}