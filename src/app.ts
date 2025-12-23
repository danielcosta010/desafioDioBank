import { IndividualAccount } from "./class/IndividualAccount";
import { CorporateAccount } from "./class/CorporateAccount";
import { StudentAccount } from "./class/StudentAccount";


const newIndividualAccount: IndividualAccount = new IndividualAccount(200, 'Daniel Costa', 123);
console.log('=====================Resultado da conta newIndividualAccount===============');
newIndividualAccount.deposit(120);
console.log(newIndividualAccount.getName());
console.log(newIndividualAccount.getBalance());

console.log('============================================================================');




const newCorporateAccount: CorporateAccount = new CorporateAccount(2112, 'DanCompany', 321);
console.log('=====================Resultado da conta newCorporateAccount==================');
newCorporateAccount.deposit(2000);
newCorporateAccount.getLoan(1900);
console.log(newCorporateAccount.getName());
console.log(newCorporateAccount.getBalance());
console.log('==============================================================================');

const newStudentAccount: StudentAccount = new StudentAccount('Isabella', 789);
console.log('=====================Resultado da conta newStudentAccount=====================');
newStudentAccount.deposit(1000);
console.log(newStudentAccount.getName());
console.log(newStudentAccount.getBalance());
console.log('==============================================================================');



