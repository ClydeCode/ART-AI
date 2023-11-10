import { instance } from "./AxiosConfig";

export async function AuthRequest(username, password) {
    const response = instance.post('/authentication/login', {
        UserName: username,
        Password: password
    });

    return await response;
}

export async function RegisterRequest(username, email, password, confirmPassword) {
    const response = instance.post('/authentication/register', {
        UserName: username,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword
    });

    return await response;
}