/* var age = +prompt('Введите свой возраст')
console.log(age);

if (age <= 18 || age == 0) {
    alert( 'Вы ещё молоды, Вам нужно учиться' );
    }else if (age <= 50) {
    alert( 'Вам нужно работать' );
    }else if (age <= 59) {
    alert( 'Вам скоро на пенсию' );
    }else if (age <= 100) {
    alert( 'Вы пенсионер' );
    }else {
      alert('Что-то пошло не так')
    }  */


var time = +prompt('Введите время в цифрах')
console.log(time);

switch (time) {
   case 0:
      alert(time + ' часов ночи')
      break;
   case 1:
      alert(time + ' час ночи')
      break;
   case 2:
   case 3:
   case 4:
      alert(time + ' часа ночи')
      break; 
   case 5:
   case 6:
      alert(time + ' часов ночи')
      break;
   case 7:
   case 8:
   case 9:
   case 10:
      alert(time + ' часов утра')
      break;
   case 12:
      alert(time + ' часов дня')
      break; 
   case 13:
      alert('1 час дня')
      break;
   case 14:
      alert('2 часа дня')
      break;
   case 15:
      alert('3 часа дня')
      break
   case 16:
      alert('4 часа дня')
      break
   case 17:
      alert('5 часов дня')
      break;
   case 18:
      alert('6 часов вечера')
      break;
   case 19:
      alert('7 часов вечера')
      break;
   case 20:
      alert('8 часов вечера')
      break;
   case 21:
      alert('9 часов вечера')
      break;
   case 22:
      alert('10 часов вечера')
      break;
   case 23:
      alert('11 часов вечера')
      break;
}

 
/* var a = +prompt('Введите три любых числа');
var b = +prompt('Введите три любых числа');
var c = +prompt('Введите три любых числа');

if (a < b && a > c || a > b && a < c){
   alert (a);
}else if (b > a && b < c || b < a && b > c){
   alert (b);
}else if (c < b && c > a || c < a && c > b){ 
   alert (c);
} */
 




