// INSTRUCTIONS:
//
// 1. Fork this template
// 2. Write your solution
// 3. Share the URL in the google form response

function arbolBonito(arbol) {

  //Condición de parada: No tiene hijos
  if( (arbol.left == null)&&(arbol.right == null) )
    return true;

  //Caso 1: Dos Hijos
  if( (arbol.left != null)&&(arbol.right != null)&&(arbol.value == arbol.left.value + arbol.right.value) )
    return arbolBonito(arbol.left) && arbolBonito(arbol.right);

  //Caso 2: Solo hijo Derecho
  if( (arbol.left == null)&&(arbol.right != null)&&(arbol.value == arbol.right.value) )
    return arbolBonito(arbol.right);

  //Caso 3: Solo hijo Izquierdo
  if( (arbol.left != null)&&(arbol.right == null)&&(arbol.value == arbol.left.value) )
    return arbolBonito(arbol.left);

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

console.log(arbolBonito(arbolA)); // True
console.log(arbolBonito(arbolB)); // True
console.log(arbolBonito(arbolC)); // False
console.log(arbolBonito(arbolD)); // True
