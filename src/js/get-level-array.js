function getArrayEasy(array) {
    array = array.reduce((total, el, index, array) => {
    if (el.difficulty != "hard") total.push(el);
    return total;
  }, []);
  return array;
}

function getArrayHard(array) {
  array = array.reduce((total, el, index, array) => {
    if (el.difficulty != "easy") total.push(el);
    return total;
  }, []);
  return array;
}

export { getArrayEasy, getArrayHard };
