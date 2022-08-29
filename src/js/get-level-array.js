
function getArrayVeryEasy(array) {
  let resArray = [...array].reduce((total, el, index, array) => {
    if (el.difficulty == "easy") total.push(el);
    return total;
  }, []);
  return resArray;
}

function getArrayEasy(array) {
  let resArray = [...array].reduce((total, el, index, array) => {
    if (el.difficulty != "hard") total.push(el);
    return total;
  }, []);
  return resArray;
}

function getArrayHard(array) {
  let resArray = [...array].reduce((total, el, index, array) => {
    if (el.difficulty != "easy") total.push(el);
    return total;
  }, []);
  return resArray;
}

function getArrayVeryHard(array) {
  let resArray = [...array].reduce((total, el, index, array) => {
    if (el.difficulty == "hard") total.push(el);
    return total;
  }, []);
  return resArray;
}

export { getArrayEasy, getArrayHard, getArrayVeryEasy, getArrayVeryHard };
