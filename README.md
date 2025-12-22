# DIO Bank - Sistema de Contas Bancárias

Projeto TypeScript que implementa um sistema de contas bancárias com diferentes tipos de contas e operações financeiras.

## Tipos de Contas

- **IndividualAccount**: Conta individual com depósito e saque
- **CorporateAccount**: Conta empresarial com acesso a empréstimos
- **StudentAccount**: Conta estudante com bônus de 10% em depósitos

## Como Usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar o projeto
```bash
npm run dev
```

O `ts-node-dev` compila e executa TypeScript automaticamente em tempo real.

## Exemplos de Uso

### Criar uma Conta Individual
```typescript
const conta: IndividualAccount = new IndividualAccount(200, 'Daniel Costa', 123);
conta.deposit(50);        // Depósito de R$ 50
conta.withdrawal(20);     // Saque de R$ 20
conta.getBalance();       // Consultar saldo
```

### Criar uma Conta Corporativa
```typescript
const empresa: CorporateAccount = new CorporateAccount(2112, 'DanCompany', 321);
empresa.getLoan(1000);    // Pedir empréstimo de R$ 1000
empresa.deposit(500);     // Depósito
empresa.withdrawal(100);  // Saque
```

### Criar uma Conta de Estudante
```typescript
const aluno: StudentAccount = new StudentAccount('Isabella', 789);
aluno.deposit(100);       // Deposita R$ 110 (100 + 10% bônus)
aluno.getBalance();       // Consultar saldo
```

## Operações Disponíveis

| Método | Descrição |
|--------|-----------|
| `deposit(value)` | Deposita valor na conta |
| `withdrawal(value)` | Saca valor (se saldo suficiente) |
| `getLoan(value)` | Pede empréstimo (apenas CorporateAccount) |
| `getBalance()` | Consulta saldo |
| `getStatus()` | Verifica se conta está ativa |
| `activateAccount()` | Ativa a conta |
| `deactivateAccount()` | Desativa a conta |

## Validações

- Saques só são permitidos com saldo suficiente e conta ativa
- Depósitos só funcionam em contas ativas
- Nome e número da conta não podem ser alterados
- Todos os atributos são privados (segurança)

## Funcionalidades Implementadas

✅ Depósito e saque com validações  
✅ Empréstimos (CorporateAccount)  
✅ Bônus de 10% em depósitos (StudentAccount)  
✅ Encapsulamento: todos os atributos privados  
✅ Imutabilidade: nome e número da conta readonly  
✅ Controle de status: ativar/desativar conta  
✅ Getters públicos para consulta de dados
