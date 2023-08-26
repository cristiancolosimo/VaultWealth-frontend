export interface BankEntry {
    id: string;
    bank_account_id: string;
    user_id: string;
    category_id: string | null;
    name: string;
    description: string | null;
    amount: string;
    transaction_date: string;
}
