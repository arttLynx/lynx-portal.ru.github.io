let date = new Date();
let lundie = ["Информатика", "Информатика", "Литература", 
"Английский", "математика", "математика"];
let mardi = ["физра", "география", "Русский", "История", "Английский"];
let all = [lundie, mardi];
alert(date.getHours() + date.getMinutes());
alert("День недели = "+ date.getDay());
var test1 = prompt("0 - lundie; 1 - mardi");
var test2 = prompt("enter random num от 0 до 4");
/*if (date.getDay() == 1) {
}
if (date.getDay() == 2) {
    alert("Первый предмет = " + all[1][0]);
}*/
alert("Ваш предмет = " + all[test1][test2]);