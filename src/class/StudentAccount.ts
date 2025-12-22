import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    deposit = (value: number): number => {
        if (!this.getStatus()) {
            throw new Error('Conta inativa, operação inválida')
        }
        const bonus = value * 0.1
        return this.addBalance(value + bonus)
    }
}