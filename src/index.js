// INSTRUCTIONS:
//
// 1. Fork this template
// 2. Write your solution
// 3. Share the URL in the google form response

function arbolBonito(arbol) {

  //document.write("ANTES");
  //document.write(arbol.left.left);
  //document.write("HOLA MUNDO");

  //Condición de parada: No tiene hijos
  if( (arbol.left == null)&&(arbol.right == null) )
    return true;

  document.write("DOS HIJOS \n");
  //Caso 1: Dos Hijos
  if( (arbol.left != null)&&(arbol.right != null)&&(arbol.value == arbol.left.value + arbol.right.value) )
    return arbolBonito(arbol.left) * arbolBonito(arbol.right);

  document.write("HIJO DERECHO \n");
  //Caso 2: Solo hijo Derecho
  if( (arbol.left == null)&&(arbol.right != null)&&(arbol.value == arbol.right.value) )
    return arbolBonito(arbol.right);

  document.write("HIJO IZQUIERDO \n");
  //Caso 3: Solo hijo Izquierdo
  if( (arbol.left != null)&&(arbol.right == null)&&(arbol.value == arbol.left.value) )
    return arbolBonito(arbol.left);

  document.write("LLEGUE \n");

  return false;
}

const arbolA = {
  value: 10,
  left: {
    value: 4,
    left: null,
    right: null
  },
  right: {
    value: 6,
    left: null,
    right: null
  }
};

const arbolB = {
  value: 26,
  left: {
    value: 14,
    left: null,
    right: null
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null
          }
        }
      },
      right: null
    }
  }
};

const arbolC = {
  value: -1,
  left: {
    value: 999,
    left: null,
    right: null
  },
  right: {
    value: 0,
    left: null,
    right: null
  }
};

const arbolD = {
  value: 15,
  left: null,
  right: null
};

//console.log(arbolBonito(arbolA)); // True
console.log(arbolBonito(arbolB)); // True
if ( arbolBonito(arbolD) )
  document.write("VERDADERO");
else
  document.write("FALSO");

//console.log(arbolBonito(arbolC)); // False
//console.log(arbolBonito(arbolD)); // True
