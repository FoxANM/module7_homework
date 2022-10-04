// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj () {
    return Object.create(null);
  }
  
  const obj = emptyObj();
  console.log(obj);
  console.log(Object.getPrototypeOf(obj));
  