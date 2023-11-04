import { instance } from "./AxiosConfig";

export async function AuthRequest(username, password) {
    const response = instance.post('/authentication/login', {
        UserName: username,
        Password: password
    })

    return await response;
}