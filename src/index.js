module.exports = function toReadable (num) {
  let ans = '';
  number = num.toString();
  if (number < 100) ans = toDeci(number);
  if (number > 99) {
    let d = number.slice(1);
    if (d === '00') ans = toStr(number[0]) + ' hundred';
    else ans = toStr(number[0]) + ' hundred ' + toDeci(d);
  }
  return ans;
}

function toDeci (n) {
  let m = n;
  if (n[0] === '0' && n.length === 2) m = n[1];
  if (m < 20) return toStr(m);
  if (m > 19) {
    if (m[1] !== '0') return toDec(m[0]) + ' ' + toStr(m[1]);
    else return toDec(m[0]);
  }
}

function toStr (numb) {
  switch (numb) {
    case '0' : return('zero');
    case '1' : return('one');
    case '2' : return('two');
    case '3' : return('three');
    case '4' : return('four');
    case '5' : return('five');
    case '6' : return('six');
    case '7' : return('seven');
    case '8' : return('eight');
    case '9' : return('nine');
    case '10' : return('ten');
    case '11' : return('eleven');
    case '12' : return('twelve');
    case '13' : return('thirteen');
    case '14' : return('fourteen');
    case '15' : return('fifteen');
    case '16' : return('sixteen');
    case '17' : return('seventeen');
    case '18' : return('eighteen');
    case '19' : return('nineteen');
  }
}

function toDec (numb) {
  switch (numb) {
    case '1' : return('ten');
    case '2' : return('twenty');
    case '3' : return('thirty');
    case '4' : return('forty');
    case '5' : return('fifty');
    case '6' : return('sixty');
    case '7' : return('seventy');
    case '8' : return('eighty');
    case '9' : return('ninety');
  }
}