export const codeUtils = [
  `
  const calculate = (expression) => {
  let firstNumber = "";
  let secondNumber = "";
  let operand;
  
  if (expression.includes("*") || expression.includes("/")) {
    let startFirst = -1;
    let startSecond;
    for (let i = 0; i <= expression.length; i++) {
      if (!expression.includes("*") && !expression.includes("/")) {
        break;
      }
      if (!Number.isInteger(+expression[i]) && expression[i] !== ".") {
        if (operand) {
          if (i-1 === startSecond) {
            continue;
          }
          secondNumber = +expression.slice(startSecond+1, i);
          expression = expression.slice(0, startFirst+1) + (operand === "*" ? String(firstNumber * secondNumber) : String(firstNumber / secondNumber)) + expression.slice(i);
          i = -1;
          firstNumber = "";
          secondNumber = "";
          operand = undefined;
          startFirst = -1;
          startSecond = undefined;
        } else if (expression[i] === "*" || expression[i] === "/") {
          operand = expression[i];
          firstNumber = +expression.slice(startFirst+1, i);
          startSecond = i;
        } else {
          if (i-1 === startFirst) {
            continue;
          } else {
            startFirst = i;
          }
        }
      }
    }
  }

  firstNumber = "";
  secondNumber = "";
  operand = undefined;

  for (let i = 0; i <= expression.length; i++) {
    if (!expression.slice(1).includes("+") && !expression.slice(1).includes("-")) {
      return expression;
    }
    if (Number.isInteger(+expression[i]) || expression[i] === "." || (expression[i] === "-" && !Number.isInteger(+expression[i-1]))) {
      operand ? secondNumber += expression[i] : firstNumber += expression[i];
    } else {
      if (operand) {
        secondNumber = +secondNumber;
        expression = (operand === "+" ? String(firstNumber + secondNumber) : String(firstNumber - secondNumber)) + expression.slice(i);
        i = -1;
        firstNumber = "";
        secondNumber = "";
        operand = undefined;
      } else {
        operand = expression[i];
        firstNumber = +firstNumber;
      }
    }
  }
}

var calc = function (expression) {
  expression = expression.replace(/\\s+/g, '');
  let opens = [];
  if (expression.includes("(")) {
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === "(") {
        opens.push(i);
      } else if (expression[i] === ")") {
        let replace = calculate(expression.slice(opens[opens.length-1]+1, i));
        if (replace[0] === "-" && expression[opens[opens.length-1]-1] === "-") {
          if (!Number.isInteger(+expression[opens[opens.length-1]-2])) {
            replace = replace.replace("-", "");
          } else {
            replace = replace.replace("-", "+");
          }
          opens[opens.length-1]--;
        }
        expression = expression.slice(0,opens[opens.length-1]) + replace + expression.slice(i+1);
        i = opens[opens.length-1];
        opens.pop();
      }
    }
  }
  return +calculate(expression);
};
  `,
  `
  function integerSquareRoot(number) {
    value = BigInt(number);
    if (value < 2n) {
      return String(value);
    }
  
    if (value < 16n) {
      return String(BigInt(Math.floor(Math.sqrt(Number(value)))));
    }
    
    if(value < (1n << 52n)){
      var x1 = BigInt(Math.floor(Math.sqrt(Number(value))))-3n;
    } else {
      var x1 = (1n << 52n) - 2n;
    }
  
    let x0 = -1n;
    while((x0 !== x1 && x0 !== (x1 - 1n))){
      x0 = x1;
      x1 = ((value / x0) + x0) >> 1n;
    }
    return String(x0);
  }
  `,
  `
  const fND = (fR, itr, sR, sItr, bS, sFN, sSN) => {
    let fNN = fR / itr + (itr === 1 ? 0 : 10 ** (itr-1)) + (1 / (itr === 1 && fR == 10 ? 2 : itr) * sFN);
    let fFNN = Math.floor(fNN);
    let fND = +String(fFNN)[Math.round((fNN - fFNN) * itr)];
    let sNN = sR / sItr + bS + (1 / sItr * sSN); //0
    let fSNN = Math.floor(sNN);
    if (sNN - fSNN > 0.999) {
      fSNN = Math.round(sNN);
      sNN = Math.round(sNN);
    }
    let sND = +String(BigInt(fSNN)**2n)[Math.round((sNN - fSNN) * sItr)];
    return [fND, sND];
  }
  
  function findDigit(n){
    let fR = n+1;
    let sR = n+1;
    let cml = 1;
    let bS = 0;
    let itr = 0;
    let iD = 0;
    let sItr = 0;
    for (let i = 0; i < cml; i++) {
      let cN = 0
      if (i % 2 === 0) {
        cN = (Math.floor(10**0.5*10**iD) - 10**iD + 1) * (i+1);
        bS = 10**iD;
        iD++;
      } else {
        cN = ((10**iD-1) - (Math.floor(10**0.5*10**(iD-1)) + 1) + 1) * (i+1);
        bS = Math.floor(10**0.5*10**(iD-1)) + 1;
      }
      if (sR > cN) {
        sR -= cN;
        cml++;
      } else {
        sItr = i + 1;
        break;
      }
    }
    cml = 1;
    for (let i = 0; i < cml; i++) {
      let cN = (10**(i+1) - 1 - 10**i + 1) * (i+1) + (i === 0 ? 1 : 0);
      if (fR > cN) {
        fR -= cN;
        cml++;
      } else {
        itr = i+1;
        break;
      }
    }
    let fN = fR / itr + (itr === 1 ? 0 : 10 ** (itr-1));
    let fFN = Math.floor(fN);
    let fD = +String(fFN)[Math.round((fN - fFN) * itr)];
    let sN = sR / sItr - 1 / sItr + bS;
    let fSN = Math.floor(sN);
    let sD = +String(BigInt(fSN)**2n)[Math.round((sN - fSN) * sItr)];
    let sFN = 1;
    let sSN = 0;
    let nD = fND(fR, itr, sR, sItr, bS, sFN, sSN);
    while (nD[0] + nD[1] === 9) {
      sFN++;
      sSN++;
      nD = fND(fR, itr, sR, sItr, bS, sFN, sSN);
    }
    let r = String(fD + sD);
    if (nD[0] + nD[1] > 9) {
      let nR = String(+r+1);
      return +nR[nR.length-1]
    } else {
      return +r[r.length-1]
    }
  }
  `,
  `
  checkRange=(a,x,y)=>a.map(v=>i+=x>v==v>y,i=0)|i
  `,
  `
  var theLift = function(queues, capacity) {
    let result = [];
    let elevator = [];
    let d = 1;
    let amount = queues.reduce((prev, curr) => prev += curr.length, 0);
    let lastSeen = null;
    for (let i = 0; i <= queues.length; i++) {
      if (amount === 0 && elevator.length === 0) {
        if (result[result.length-1] != 0) {
          result.push(0);
        }
        if (result[0] != 0) {
          result.unshift(0);
        }
        return result;
      }
      if (d === 1 && i === queues.length) {
        i -= 1;
        d = 0;
      } else if (d === 0 && i === 1) {
        d = 1;
        i--;
      } else {
        let done = false;
        if (d === 0) {
          i -= 2;
        }
        for (let x = 0; x < elevator.length; x++) {
          if (elevator[x] === i) {
            elevator.splice(x,1);
            if (!done && lastSeen != i) {
              lastSeen = i;
              result.push(i);
              done = true;
            }
            x--;
          }
        }
        if (queues[i].length && elevator.length != capacity) {
          for (let j = 0; j < queues[i].length; j++) {
            if (elevator.length === capacity) {
              break;
            } else if (d === 1 && queues[i][j] > i || i === queues.length-1 && queues[i][j] < i) {
              amount--;
              elevator.push(queues[i][j]);
              queues[i].splice(j,1);
              if (!done && lastSeen != i) {
                lastSeen = i;
                result.push(i);
                done = true;
              }
              j--;
            } else if (d === 0 && queues[i][j] < i || i === 0 && queues[i][j] > i) {
              amount--;
              elevator.push(queues[i][j]);
              queues[i].splice(j,1);
              if (!done && lastSeen != i) {
                lastSeen = i;
                result.push(i);
                done = true;
              }
              j--;
            }
          }
        } else if (elevator.length === capacity) {
          for (let j = 0; j < queues[i].length; j++) {
            if (d === 1 && queues[i][j] > i || i === queues.length-1 && queues[i][j] < i) {
              if (!done) {
                result.push(i);
                done = true;
              }
            } else if (d === 0 && queues[i][j] < i || i === 0 && queues[i][j] > i) {
              if (!done) {
                result.push(i);
                done = true;
              }
            }
          }
        }
      }
    }
  }
  `,
  `
  function arrayDiff(a, b) {
    return a.filter((number) => !b.includes(number));
  }
  `,
  `
  function central_pixels(image, colour) {
    let result = [];
    let prevBiggest = 1;
    let biggest = 1;
  
    let picture = image.pixels;
    let width = image.width;
  
    for (let i = 0; i < picture.length; i++) {
      if (picture[i] === colour) {
        if (i < width) {
          picture[i] = 1;
        } else if (Number.isInteger((i+1)/width) || Number.isInteger(i/width)) {
          picture[i] = 1;
        } else if (picture[i+width] != colour) {
          picture[i] = 1;
        } else if (picture[i+1] != colour ) {
          picture[i] = 1;
        } else {
          let left = picture[i-1];
          let top = picture[i-width];
          if (left === Infinity || top === Infinity) {
            picture[i] = 1;
          } else {
            picture[i] = Math.min(left,top) + 1;
          }
        }
      } else {
        picture[i] = Infinity;
      }
    }
  
    for (let i = picture.length; i >= 0; i--) {
      if (picture[i] > 1 && picture[i] !== Infinity) {
        let right = picture[i+1];
        let bottom = picture[i+width];
        let left = picture[i-1];
        let top = picture[i-width];
        if (Math.max(right,bottom,left,top) === Infinity) {
          picture[i] = 1;
        } else {
          picture[i] = Math.min(right,bottom,left,top) + 1;
        }
        prevBiggest = Math.max(biggest, picture[i]);
      }
      if (prevBiggest > biggest) {
        result = [];
        biggest = prevBiggest;
      }
      if (biggest === picture[i]) {
        result.push(i);
      }
    }
    return result;
  }
  `,
  `
  var spiralize = function(size) {
    let grid = new Array(size);
    for (let i = 0; i < size; i++) {
      grid[i] = new Array(size).fill(0);
    }
    let ones = {};
    let descending = size - 1;
    let ascending = 3;
    let subtract = 2;
    for (let i = 0; i < size; i++) {
      if (size % 2 === 0) {
        if (i === size/2) {
          descending++;
        } else if (i === size/2-1) {
          ascending--;
        }
      } else {
        if (i === Math.floor(size/2)) {
          ones[i] = i % 2 === 0 ? ascending : descending;
          i++;
          ascending++;
          descending--;
          subtract = -2;
        }
      }
      i % 2 === 0 ? (ones[i] = descending - (i === 0 ? 0 : subtract), descending -= (i === 0 ? 0 : subtract)) : (ones[i] = ascending + (i === 1 ? 0 : subtract), ascending += (i === 1 ? 0 : subtract))
    }
  
    let top = 0;
    let bottom = size-1;
    for (let i = 0; i < size; i++) {
      for (let j = 0; ones[i]; j++) {
        if (ones[i] === bottom - top + 1) {
          while (top <= bottom) {
            grid[top][i] = 1;
            top++;
            ones[i]--;
          }
          top = 0;
          bottom = size - 1;
        } else {
          if (j % 2 === 0) {
            grid[top][i] = 1;
            ones[i]--;
            if (ones[i]) {
              top += 2;
            } else {
              top = 0;
              bottom = size - 1;
            }
          } else {
            grid[bottom][i] = 1;
            ones[i]--;
            if (ones[i]) {
              bottom -= 2;
            } else {
              top = 0;
              bottom = size - 1;
            }
          }
        }
      }
    }
    return grid;
  }
  `,
  `
  function pathFinder(maze){
    let queue = [0];
    maze = maze.split("\\n").join("");
    let row = Math.sqrt(maze.length);
    if (!Number.isInteger(row)) {
      return false;
    }
    maze = maze.replace(".", "s");
  
    while (queue.length) {
      if (queue[0] === maze.length-1) {
        return true;
      }
      if (!Number.isInteger((queue[0]+1)/row) && maze[queue[0]+1] === ".") {
        queue.push(queue[0]+1);
        maze = maze.slice(0, queue[0]+1) + 's' + maze.slice(queue[0]+2,maze.length);
      }
      if (maze[queue[0]+row] === ".") {
        queue.push(queue[0]+row);
        maze = maze.slice(0, queue[0]+row) + 's' + maze.slice(queue[0]+row+1,maze.length);
      }
      if (!Number.isInteger(queue[0]/row) && maze[queue[0]-1] === ".") {
        queue.push(queue[0]-1);
        maze = maze.slice(0, queue[0]-1) + 's' + maze.slice(queue[0],maze.length);
      }
      if (maze[queue[0]-row] === ".") {
        queue.push(queue[0]-row);
        maze = maze.slice(0, queue[0]-row) + 's' + maze.slice(queue[0]-row+1,maze.length);
      }
      queue.shift();
    }
    return false;
  }
  `,
  `
  function bowlingScore(frames) {
    let end = 0;
    let result = 0;
    for (let i = frames.length-1; i > frames.length-4; i--) {
      if (frames[i] !== " ") {
        end++;
      } else {
        break;
      }
    }
    let combinedFrames = frames.split(" ").join("");
    for (let i = 0; i < combinedFrames.length; i++) {
      if (i >= combinedFrames.length - end) {
        if (combinedFrames[i] === "X") {
          result += 10;
        } else if (combinedFrames[i] === "/") {
          result += (10 - +combinedFrames[i-1]);
        } else {
          result += +combinedFrames[i];
        }
      } else {
        if (combinedFrames[i] === "X") {
          result += 10;
          for (let j = 1; j < 3; j++) {
            if (combinedFrames[i+j] === "X") {
              result += 10;
            } else if (combinedFrames[i+j] === "/") {
              result += (10 - +combinedFrames[i+j-1]);
            } else {
              result += +combinedFrames[i+j];
            }
          }
        } else if (combinedFrames[i] === "/") {
          result += (10 - +combinedFrames[i-1]);
          if (combinedFrames[i+1] === "X") {
            result += 10;
          } else {
            result += +combinedFrames[i+1];
          }
        } else {
          result += +combinedFrames[i];
        }
      }
    }
    return result;
  }
  `,
  `
  squirrel=(h,H,S)=>+((h*h+S*S)**0.5*H/h).toFixed(4)
  `,
  `
  var Sudoku = function(data) 
{
  return {
    isValid: function() {
      if (data.length !== data[0].length) {
        return false;
      }
      let seen = {};
      for (let i = 0; i < data.length; i++) {
        seen = {};
        for (let j = 0; j < data.length; j++) {
          if (seen[data[i][j]] || data[i][j] > data.length || data[i][j] < 1 || !Number.isInteger(data[i][j])) {
            return false;
          } else {
            seen[data[i][j]] = 1;
          }
        }
      }
      seen = {};
      for (let i = 0; i < data.length; i++) {
        seen = {};
        for (let j = 0; j < data.length; j++) {
          if (seen[data[j][i]]) {
            return false;
          } else {
            seen[data[j][i]] = 1;
          }
        }
      }
      seen = {};
      let nextCube = 1;
      for (let i = 0; i <= data.length; i++) {
        if (i === data.length) {
          nextCube++;
          i = 0;
        }
        if (i / Math.sqrt(data.length) % 1 === 0) {
          seen = {};
        }
        for (let j = Math.sqrt(data.length) * (nextCube - 1); j < Math.sqrt(data.length) * nextCube; j++) {
          if (data[i][j] === undefined) {
            return true;
          }
          if (seen[data[i][j]]) {
            return false;
          } else {
            seen[data[i][j]] = 1;
          }
        }
      }
    }
  };
  `,
  `
  function sum(num) {
    const matrix = Array(num + 1).fill(null).map(() => {
      return Array(num + 1).fill(null);
    });
    for (let i = 0; i <= num; i++) {
      matrix[i][0] = 1;
    }
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        if (i > j) {
          matrix[i][j] = matrix[i - 1][j];
        } else {
          const combosWithoutSummand = matrix[i - 1][j];
          const combosWithSummand = matrix[i][j - i];
  
          matrix[i][j] = combosWithoutSummand + combosWithSummand;
        }
      }
    }
  
    return matrix[num][num];
  }
  `,
  `
  function translate(sentence) {
    let vowel = ["a","e","i","o","u"];
    let punctuation = ["?","!",".",","];
    let result = sentence.split(" ").reduce((initial, word) => {
      let capital = word[0] === word[0].toUpperCase();
      let endChars = 0;
      for (let i = word.length-1; i >= 0; i--) {
        if (punctuation.includes(word[i])) {
          endChars++;
        } else {
          break;
        }
      }
      for (let i = 0; i < word.length; i++) {
        if (vowel.includes(word[i].toLowerCase())) {
          if (i === 0) {
            let latin = word.slice(0,word.length-endChars).concat("way",word.substr(word.length-endChars,word.length-1));
            initial.push(latin);
            return initial;
          } else {
            let latin = word.slice(i,word.length-endChars).concat(word.slice(0,i).toLowerCase(),"ay",word.substr(word.length-endChars,word.length-1));
            if (capital) {
              initial.push(latin.replace(latin[0],latin[0].toUpperCase()));
            } else {
              initial.push(latin);
            }
            return initial;
          }
        }
      }
    }, []).join(" ");
  
    return result;
  };
  `,
  `
  snail = function(array) {
    let result = [];
    let seen = [];
    let col = 0;
    let row = 0;
    let dir = 0;
    while (seen.length < array[0].length * array.length) {
      if (!seen.includes([[col],[row]].join(","))) {
        result.push(array[col][row]);
        seen.push([[col],[row]].join(","));
      }
      if (dir === 0) {
        if (array[col][row+1] && !seen.includes([[col],[row+1]].join(","))) {
          row++;
        } else {
          dir = 1;
        }
      } else if (dir === 1) {
        if (array[col+1] && array[col+1][row] && !seen.includes([[col+1],[row]].join(","))) {
          col++;
        } else {
          dir = 2;
        }
      } else if (dir === 2) {
        if (array[col][row-1] && !seen.includes([[col],[row-1]].join(","))) {
          row--;
        } else {
          dir = 3;
        }
      } else if (dir === 3) {
        if (array[col-1] && array[col-1][row] && !seen.includes([[col-1],[row]].join(","))) {
          col--;
        } else {
          dir = 0;
        }
      }
    }
    return result;
  }
  `,
  `
  const compose = (n, ...args) => {
    args.forEach((f) => {
      n = f(n);
    })
    return n;
  }
  `,
  `
  function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$/.test(password);
  }
  `,
  `
  var multipleOf3Regex = /^(0*(1(01*0)*1)*)*$/;
  `,
  `
  function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }
  `,
  `
  function formatDuration(sec) {
    let y = Math.floor(sec/60/60/24/365);
    let d = Math.floor(sec/60/60/24)%365;
    let h = Math.floor(sec/60/60)%24;
    let m = Math.floor(sec/60)%60;
    let s = Math.floor(sec%60);
    let text = [y === 1 ? "year" : "years",d === 1 ? "day" : "days",h === 1 ? "hour" : "hours",m === 1 ? "minute" : "minutes",s === 1 ? "second" : "seconds"];
    let lengthValid = 6 - [y, d, h, m, s,0].join(",").match(/(?<![0-9])0/g).length;
    return [y, d, h, m, s].reduce((result, curr, i) => {
      if (curr > 0) {
        if (lengthValid >= 3) {
          result.push(\`\${curr} \${text[i]}, \`);
          lengthValid--;
        } else if (lengthValid === 2) {
          result.push(\`\${curr} \${text[i]} and \`);
          lengthValid--;
        } else {
          result.push(\`\${curr} \${text[i]}\`);
        }
      }
      return result;
    }, []).join("") || "now";
  };
  `,
  `
  solution = (list) => [...list].reduce((prev,curr,i) => {
    if (list[i-1] == curr-1 && list[i+1] == curr+1) return prev;
    if (list[i-2] == curr-2 && list[i-1] == curr-1) return prev+"-"+curr;
    return prev+","+curr;
  });
  `,
  `
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  
  function gap(g, m, n) {
    let gapArray = [];
    while (m <= n) {
      if (isPrime(m)) {
        gapArray.push(m);
        if (gapArray.length === 2) {
          if (gapArray[1] - gapArray[0] === g) {
            break;
          } else {
            gapArray = [];
          }
        } else {
          m++;
        }
      } else {
        m++;
      }
    }
    return gapArray.length === 2 ? gapArray : null;
  }
  `,
  `
  function calculate(f, n) {
    return f[1] === "plus" ? n + f[0] : f[1] === "minus" ? n - f[0] : f[1] === "times" ? Math.floor(n * f[0]) : f[1] === "dividedBy" ? Math.floor(n / f[0]) : 0;
  }
  
  
  function zero(f=0) {
    if (Number.isInteger(f)) {
      return 0;
    } else {
      return calculate(f, 0);
    }
  }
  function one(f=0) {
    if (Number.isInteger(f)) {
      return 1;
    } else {
      return calculate(f, 1);
    }
  }
  function two(f=0) {
    if (Number.isInteger(f)) {
      return 2;
    } else {
      return calculate(f, 2);
    }
  }
  function three(f=0) {
    if (Number.isInteger(f)) {
      return 3;
    } else {
      return calculate(f, 3);
    }
  }
  function four(f=0) {
    if (Number.isInteger(f)) {
      return 4;
    } else {
      return calculate(f, 4);
    }
  }
  function five(f=0) {
    if (Number.isInteger(f)) {
      return 5;
    } else {
      return calculate(f, 5);
    }
  }
  function six(f=0) {
    if (Number.isInteger(f)) {
      return 6;
    } else {
      return calculate(f, 6);
    }
  }
  function seven(f=0) {
    if (Number.isInteger(f)) {
      return 7;
    } else {
      return calculate(f, 7);
    }
  }
  function eight(f=0) {
    if (Number.isInteger(f)) {
      return 8;
    } else {
      return calculate(f, 8);
    }
  }
  function nine(f=0) {
    if (Number.isInteger(f)) {
      return 9;
    } else {
      return calculate(f, 9);
    }
  }
  
  function plus(f) {
    return [f,"plus"];
  }
  function minus(f) {
    return [f,"minus"];
  }
  function times(f) {
    return [f,"times"];
  }
  function dividedBy(f) {
    return [f,"dividedBy"];
  }
  `,
];
