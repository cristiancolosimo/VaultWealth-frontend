import {APP_BACKEND_URL} from '../../app.settings'
import { generateHeaders } from '../utils/http_headers';

export const registrationFetch= async (email:string, password:string)=>{
    localStorage.removeItem('token');
    const response = await fetch(`${APP_BACKEND_URL}/users/registration`, {
        method: 'POST',
        headers: generateHeaders(),
        body: JSON.stringify({email, password})
    });
    const data = await response.json();
    return data;
}

export const loginFetch = async (email:string, password:string)=>{
    localStorage.removeItem('token');
    const response = await fetch(`${APP_BACKEND_URL}/users/login`, {
        method: 'POST',
        headers: generateHeaders(),
        body: JSON.stringify({email, password})
    });
    const data = await response.json();
    return data;
}

export const meFetch = async ()=>{
      //TODO   
}
