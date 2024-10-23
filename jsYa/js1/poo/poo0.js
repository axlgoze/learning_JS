// Confeccionar una clase llamada suma, que contenga dos atributos (valor1, valor2) y tres métodos: cargarvalor1, cargarvalor2 y retornarresultado. Implementar la clase suma.
// La definición de un objeto de la clase que deben plantear es:

// let s=new suma();
// s.primerValor(10);
// s.segundoValor(20);
// document.write('La suma de los dos valores es:'+s.retornarResultado());

function Sum(){
    this.addValue1 = function(value1){
        this.val1 = value1;
    }
    this.addValue2 = function(value2){
        this.val2 = value2;
    }
    this.returnvalue = function(){
        return this.val1 + this.val2;
    }
}

let s=new Sum();
s.addValue1(995);
s.addValue2(10);
document.write('La suma de los dos valores es:'+s.returnvalue());