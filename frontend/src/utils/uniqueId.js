function* uniqueId () {
  let id = 0;

  while(true) {
    yield id;
    id++;
  }
 }  

const ids = uniqueId();
const getId = () => ids.next().value;

export default getId;
