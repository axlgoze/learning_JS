// En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
// Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
// a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

// Estado de la cuenta	'Acreedor' si el saldo es >0.
// 			'Deudor' si el saldo es <0.
// 			'Nulo' si el saldo es =0.

// b) La suma total de los saldos acreedores.

let client, accountNumber, balance;
let sum=0;
accountNumber=0;

do{
    client=prompt("Enter the client name");
    accountNumber=parseInt(prompt("Enter The account number"));
    balance=parseInt(prompt("Enter the balance"));

    document.write("Client: "+client);
    document.write("<br>");
    document.write("Account number; "+accountNumber);
    document.write("<br>");
    document.write("Balance:"+balance);

    if(balance>0){
        document.write("<br>");
        document.write("creditor");
        sum=sum+balance;
    }else{
        if(balance<0){
            document.write("<br>");
            document.write("debtor");
        }else{
            document.write("<br>");
            document.write("null");
        }
    }
    document.write("<br>");
    document.write("<br>");
}while(accountNumber>0);

document.write("<br>");
document.write("The total balance of all creditors is: "+sum);
