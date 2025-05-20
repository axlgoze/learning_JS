// Declarar una clase llamada Calculadora que reciba en el constructor dos valores.
// Definir las responsabilidades de sumar, restar, multiplicar, dividir e imprimir.

// Declarar luego una clase llamada CalculadoraCientifica que herede de Calculadora y
// añada las responsabilidades de calcular el cuadrado del primer número y la raíz cuadrada.

class Calculator{
    constructor (x,y) {
        this.nmbr1 = x;
        this.nmbr2 = y;
        this.result = 0;
    }
    sum(){this.result = this.nmbr1 + this.nmbr2;}
    rest(){ this.result = this.nmbr1 - this.nmbr2}
    multiply(){ this.result = this.nmbr1 * this.nmbr2}
    divide(){ this.result = this.nmbr1 / this.nmbr2}
    print(){ this.result = console.log(this.result)}
}

const operation1 = new Calculator(5,3);
operation1.sum();
operation1.print();

class ScienceCalculator extends Calculator{
    power(){this.result = Math.pow(this.nmbr1,2)}
    square(){this.result = Math.sqrt(this.nmbr1)}
}

const operation2 = new ScienceCalculator(30,5);
operation2.sum();
operation2.print();
operation2.power();
operation2.print();
operation2.square();
operation2.print();
operation2.divide();
operation2.print();