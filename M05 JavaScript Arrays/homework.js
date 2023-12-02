/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      array[index] = element + 1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array[array.length] = elemento;
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) { // in process
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código: 
   let vector = [];
   vector.push(elemento);    
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      vector.push(element);
   }    
   return vector;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frace = "";
   for (let index = 0; index < palabras.length; index++) {
      if (index == palabras.length -1) 
      {
         frace +=palabras[index];
      } else {
         frace +=palabras[index] + " "; 
      }      
   }
   return frace;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   array = array.includes(elemento);
   return array;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   const suma = arrayOfNums.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var cant = agregarNumeros(resultadosTest)/resultadosTest.length;
   return cant;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
   return Math.max(...arrayOfNums) ;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var num = 1;
   for (let index = 0; index < arguments.length; index++) {
      num = num* arguments[index];      
   }
   if (arguments.length == 0) {
      return 0;
   } else {
      return num;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let num = 0;
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element>18) {
         num++; 
      }
   }
   return num;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana";
         break;
      case 7:
         return "Es fin de semana";
         break;
      default:
         return "Es dia laboral";
         break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   while(num > 10)
   {
      num = num /10;
      num = Math.trunc(num);
   }
  
   if (num == 9) {
      return true;
   } else {
      return false;
   } 
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var aux = true;
   for (let index = 0; index < array.length - 1; index++) {
      const element = array[index];
      if (element != array[index + 1] ) {
         aux = false;
      }      
   }
   return aux;
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses = ['Enero','Marzo','Noviembre'];
   let vector = [];
   for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if(meses.includes(element))
      {
         vector.push(element);
      }      
   }

  // vector.sort(vector);
   if (vector.length == 3 ) {
      return vector;   
   } else {
      return "No se encontraron los meses pedidos";
   }   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   vector = [];
   for (let index = 0; index <= 10; index++) {      
      vector.push(index*6 );
   }
   return vector;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   vector = [];
   array.forEach(element => {
      if (element > 100) {
         vector.push(element);
      }
   });
   return vector;
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const array = [];
  let suma = 0;
  let condicion = true;

  for (let i = 1; i <= 10; i++) {
    array.push(num + 2 * i);
    suma += num + 2 * i;

    if (suma == i ) {
      condicion = false;
    }

    if (!condicion) {
      break;
    }
  }

  if (!condicion) {
    return "Se interrumpió la ejecución";
  }

  return array;
}

function continueStatement(num) {// in process
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   vector = [];
   for (let index = 1; index < 10; index++) {      
      if ((index == 5)&&(num == 5)) {
         continue;
      }
      else{
         vector.push(num + 2 * index );
      }     
   }
   return vector;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
