import { DioAccount } from "./DioAccount";

export class CorporateAccount extends DioAccount {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    getLoan = (value: number): number => {
        return this.deposit(value)
    }
}