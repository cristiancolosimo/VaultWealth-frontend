export interface Bank {
    id: string;
    name: string;
    description: string | null;
    iban: string | null;
    bic: string | null;
    include_in_total: boolean;
}  