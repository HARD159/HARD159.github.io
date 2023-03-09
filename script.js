var unntaksordpånor =  ["er", "kino", "testoni",];
var unntaksordpårus =  ["арь", "щино", "работает",];
var korektord;


function ad_del(user_id) {
  var input_val = document.getElementById(user_id).value;

  input_val = String(input_val);
  var lengstring = input_val.length;
  korektord = input_val.replace('.', '.');
  korektord = korektord.toLowerCase();

  for (let i = 0; i < unntaksordpånor.length; i++){
    if (korektord == unntaksordpånor[i]) {
      korektord = unntaksordpårus[i];
    }
  }

  for (let i = 0; i < lengstring; i++){
    korektord = korektord.replace('skj', '<h1 class="h1ru"> Ш </h1>');
    korektord = korektord.replace('sj', '<h1 class="h1ru"> Ш </h1>');
    korektord = korektord.replace('rs', '<h1 class="h1ru"> Ш </h1>');
    korektord = korektord.replace('sl', '<h1 class="h1ru"> Ш </h1>l');
  }

  for (let i = 0; i < lengstring; i++){
    korektord = korektord.replace('tj', '<h1 class="h1ru"> Щ </h1>');
    korektord = korektord.replace('kj', '<h1 class="h1ru"> Щ </h1>');

    korektord = korektord.replace('ski', '<h1 class="h1ru"> Ш</h1><h1 class="h1enPlus">i</h1>');
    korektord = korektord.replace('sky', '<h1 class="h1ru"> Ш</h1><h1 class="h1enPlus">y</h1>');
    korektord = korektord.replace('skøy', '<h1 class="h1ru"> Ш</h1><h1 class="h1enPlus2">øy</h1>');
    korektord = korektord.replace('skei', '<h1 class="h1ru"> Ш</h1><h1 class="h1enPlus2">ei</h1>');
    korektord = korektord.replace('ki', '<h1 class="h1ru"> Х</h1><h1 class="h1enPlus">i</h1>');
    korektord = korektord.replace('ky', '<h1 class="h1ru"> Х</h1><h1 class="h1enPlus">y</h1>');
    korektord = korektord.replace('køy', '<h1 class="h1ru"> Х</h1><h1 class="h1enPlus2">øy</h1>');
    korektord = korektord.replace('kei', '<h1 class="h1ru"> Х</h1><h1 class="h1enPlus2">ei</h1>');
    korektord = korektord.replace('gi', '<h1 class="h1ru"> Й</h1><h1 class="h1enPlus">i</h1>');
    korektord = korektord.replace('gy', '<h1 class="h1ru"> Й</h1><h1 class="h1enPlus">y</h1>');
    korektord = korektord.replace('gøy', '<h1 class="h1ru"> Й</h1><h1 class="h1enPlus2">øy</h1>');
    korektord = korektord.replace('gei', '<h1 class="h1ru"> Й</h1><h1 class="h1enPlus2">ei</h1>');
  }

  var element = document.getElementById("id01");
	element.innerHTML = korektord;

  // for (let i = 0; i < lengstring; i++) {
  
  //   korektord = korektord.replace('a', 'а');
  //   korektord = korektord.replace('b', 'б');
  //   korektord = korektord.replace('c', 'ц');
  //   korektord = korektord.replace('d', 'д');
  //   korektord = korektord.replace('e', 'е');
  //   korektord = korektord.replace('f', 'ф');
  //   korektord = korektord.replace('g', 'г');
  //   korektord = korektord.replace('h', 'х');
  //   korektord = korektord.replace('i', 'и');
  //   korektord = korektord.replace('j', 'й');
  //   korektord = korektord.replace('k', 'к');
  //   korektord = korektord.replace('l', 'л');
  //   korektord = korektord.replace('m', 'м');
  //   korektord = korektord.replace('n', 'н');
  //   korektord = korektord.replace('o', 'у');
  //   korektord = korektord.replace('p', 'п');
  //   korektord = korektord.replace('q', 'ку');
  //   korektord = korektord.replace('r', 'р');
  //   korektord = korektord.replace('s', 'с');
  //   korektord = korektord.replace('t', 'т');
  //   korektord = korektord.replace('u', 'ю');
  //   korektord = korektord.replace('v', 'в');
  //   korektord = korektord.replace('w', 'в');
  //   korektord = korektord.replace('x', 'екс');
  //   korektord = korektord.replace('y', 'и');
  //   korektord = korektord.replace('z', 'сет');
  //   korektord = korektord.replace('å', 'о');
  // }

  


  // console.log(lengstring);
  console.log(korektord);
  //console.log(input_val.replace('skj', 'щ'));


  // if (regExp == /skj|sj|rs|sl/gi) {
  //   console.log(ja);
  // }
}

// /skj|sj|rs|sl/gi

// if (input_val == /skj|sj|rs|sl/gi) {
//   console.log(ja);
// }