'use strict';
// let name = prompt("Как тебя зовут?", "");
// document.getElementById("userName").textContent = "Hello, " + name + "!";

// alert("" + 1 + 0);      // "1"      // "10"
// alert("" - 1 + 0);      // "-1"     // -1
// alert(true + false);    // 1        // 1
// alert(6 / "3");         // 2        // 2
// alert("2" * "3");       // 6        // 6
// alert(4 + 5 + "px");    // "9px"    // "9px"
// alert("$" + 4 + 5);     // "$9"     // "$45"
// alert("4" - 2);         // 2        // 2
// alert("4px" - 2);       // NaN      // NaN
// alert("  -9  " + 5);    // -4       // "  -9  5"
// alert("  -9  " - 5);    // -14      // -14
// alert(null + 1);        // 1        // 1
// alert(undefined + 1);   // undefined    // NaN
// alert(" \t \n" - 2);    // NaN      // -2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12


// alert(5 > 4);                   // true
// alert("ананас" > "яблоко");     // false
// alert("2" > "12");              // false    // true
// alert(undefined == null);       // true
// alert(undefined === null);      // false
// alert(null == "\n0\n");         // true     // false
// alert(null === +"\n0\n");       // false


// let value = prompt("Введите число:", 0);
// if(value > 0) {
//     alert("1");
// } else if(value < 0) {
//     alert("-1");
// } else {
//     alert("0");
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : 
//     '';

// let age = 91;

// // if(age < 14 || age >90) {
// if( !(age >= 14 && age <= 90)) {
//     alert(true);
// } else {
//     alert(false);
// }

// if (null || -1 && 1) alert( 'third' );

let user = prompt('Кто там?', '');
if(user === 'Админ'){
    let password = prompt('Пароль?', '');
    if(password === 'Я Главный') {
        alert('Здравствуйте!');
    } else if(password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if(user === '' || user === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}