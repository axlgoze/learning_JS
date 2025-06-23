// Plantear una clase Cliente que permita almacenar el nombre de un cliente y el saldo actual.
// Definir además del constructor otros dos métodos que permitan depositar y extraer dinero.

class Client{
    constructor (name, balance){
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }
    extract(amount){
        return this.balance = this.balance - amount;
    }
}

const client1 = new Client('Axl',9000);
client1.extract(100)
console.log(client1.balance);



