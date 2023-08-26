import { loginFetch } from "../service/user.service";
import { signal } from "@preact/signals";

export const isLogged = signal(true);
;

export const authWithEmailAndPassword = async (email: string, password: string) => {
    const resp = await loginFetch(email, password);
    if(!resp.data) {
        isLogged.value = false;
        return false;
    }
    
    localStorage.setItem('token', resp.data.token);
    isLogged.value = true;
    return true;
}

export const logout = () => {
    localStorage.removeItem('token');
    isLogged.value = false;
}


