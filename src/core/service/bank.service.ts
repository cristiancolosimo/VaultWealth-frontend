import {APP_BACKEND_URL} from '../../app.settings'
import { Bank } from '../models/bank.model';
import { GenericResponse } from '../models/response';
import { generateHeaders } from '../utils/http_headers';


export const getBankFetch = async (id: string) => {
    const bankRaw = await  fetch(`${APP_BACKEND_URL}/bank/${id}`);
    const response = await bankRaw.json() as GenericResponse<Bank>;
    const bank = response.data;
    if(bank == null) throw new Error("No bank found");
    return bank;
}

export const getBanksFetch = async () => {
    const banksRaw = await fetch(`${APP_BACKEND_URL}/bank`);
    const response = await banksRaw.json() as GenericResponse<Bank[]>;
    const banks = response.data;
    if(banks == null) throw new Error("No banks found");
    return response;
}

export const createBankFetch = async (bank: Bank) => {
    const bankRaw = await fetch(`${APP_BACKEND_URL}/bank`, {
        method: 'POST',
        headers: generateHeaders(),
        body: JSON.stringify(bank)
    });
    const response = await bankRaw.json() as GenericResponse<Bank>;
    const createdBank = response.data;
    if(createdBank == null) throw new Error("No bank created");
    return createdBank;
}

