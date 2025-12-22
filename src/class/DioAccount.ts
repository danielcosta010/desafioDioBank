export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  addBalance = (value: number): number => {
    return (this.balance += value);
  };

  deposit = (value: number): number => {
    if (!this.status) {
      throw new Error("Conta inativa, operação não permitida");
    }
    return (this.balance += value);
  };
  withdrawal = (value: number): number => {
    if (!this.status) {
      throw new Error("Conta inativa. Operação não permitida");
    }
    if (this.balance >= value) {
      return (this.balance -= value);
    }
    throw new Error("Saldo insuficiente");
  };
  getBalance = (): number => {
    console.log("Seu Saldo é:");
    return this.balance;
  };
  getStatus = (): boolean => {
    return this.status;
  };
  getName = (): string => {
    return this.name;
  };
  getAccountNumber = (): number => {
    return this.accountNumber;
  };
  activateAccount = (): boolean => {
    console.log("Sua conta está ativa");
    return (this.status = true);
  };
  deactivateAccount = (): boolean => {
    console.log("Sua conta está inativa");
    return this.status = false;
  };
}
