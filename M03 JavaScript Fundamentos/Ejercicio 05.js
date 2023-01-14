/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve False.
   // Tu código:
   var resultado;
   if (num > 0) return resultado = 'Es positivo';
   if (num < 0) return resultado = 'Es negativo';
   if (num == 0) return false
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   var a = '!';
   var unir = str + a
   return (unir);
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   var unir = nombre + ' ' + apellido;
   return (unir);
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   var a = 'Hola ';
   var b = '!';
   var unir = a + nombre + b;
   return (unir);
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var rec = alto * ancho;
   return (rec);
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un rectángulo.
   // Debes retornar su perímetro.
   // Tu código:
   var per = lado * 4;
   return (per);
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   var tri = base * altura / 2;
   return (tri);
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   var dolar = euro * 1.2;
   return (dolar)
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   var resultado;
   if (letra === 'a') return resultado = 'Es vocal';
   if (letra === 'e') return resultado = 'Es vocal';
   if (letra === 'i') return resultado = 'Es vocal';
   if (letra === 'o') return resultado = 'Es vocal';
   if (letra === 'u') return resultado = 'Es vocal';
   if (letra === 'A') return resultado = 'Es vocal';
   if (letra === 'E') return resultado = 'Es vocal';
   if (letra === 'I') return resultado = 'Es vocal';
   if (letra === 'O') return resultado = 'Es vocal';
   if (letra === 'U') return resultado = 'Es vocal'; 
   resultado = 'Dato incorrecto';
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
