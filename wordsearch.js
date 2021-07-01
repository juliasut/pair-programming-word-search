const transpose = function(letters) {
    let arr = [];
    for (let x = 0; x < letters.length; x++) {
      for (let y = 0; y < letters[x].length; y++) {
        if (!arr[y]) arr[y] = [];
        let element = letters[x][y];
        arr[y][x] = element;
      }
    }
    return arr;
  } 
  
  const wordSearch = (letters, word) => {
      const horizontalJoin = letters.map(ls => ls.join(''));
      const transposed = transpose(letters);
      const verticalJoin = transposed.map(ls => ls.join(''));
      const rHorizontalJoin = letters.map(ls => ls.reverse().join(''));
      const rVerticalJoin = transposed.map(ls => ls.reverse().join(''));
      
      for (let l of horizontalJoin) {
  
          if (l.includes(word)) {
              return true;
          }
      }
      for (let r of verticalJoin) {
          if(r.includes(word)) {
              return true;
          }
      }
      for (let l of rHorizontalJoin) {
  
          if (l.includes(word)) {
              return true;
          }
      }
      for (let r of rVerticalJoin) {
          if(r.includes(word)) {
              return true;
          }
      }
      return false;
  };
  
  
module.exports = wordSearch
  
  