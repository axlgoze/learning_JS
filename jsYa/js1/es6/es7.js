// Crear un objeto literal llamado cliente1 con dos propiedads 'nombre' y 'saldo'.
// Definir tres métodos con notación abreviada que permitan depositar, extraer e imprimir su saldo/

const client1 = {
    name: 'Axl',
    balance: 9000,
    deposit(amount){ this.balance = this.balance + amount},
    extract(amount){ this.balance = this.balance - amount},
    print(){ document.getElementById('es6').innerHTML = this.balance}
}

client1.deposit(100);
console.log(client1.print());
client1.extract(100);
console.log(client1.print());
client1.extract(100);
console.log(client1.print());