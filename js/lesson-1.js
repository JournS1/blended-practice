/* region Задача 1 /*

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 
// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Введіть число'));
// if (number === 10) {
//     alert('Вірно');
// } else {
//     alert('Невірно');
// }
// console.log(number);

/* end region Задача 1 */


/* region Задача 2 /*

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:  "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min < 15) {
//     alert(`${min} входить в першу чверть`);
// }
// else if (min >= 15 && min < 30) {
//     alert(`${min} входить в другу чверть`);
// }
// else if (min >= 30 && min < 45) {
//     alert(`${min} входить в третю чверть`);
// }
// else {
//     alert(`${min} входить в четверту чверть`);
// }

/* end region Задача 2 */


/* region Задача 3 /*

// Змінна num може набувати 4 значення: '1', '2', '3' або '4' (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима', якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач введе в prompt щось інше. В такому випадку result має набувати значення: "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Введіть число від 1 до 4');
// function getSeason (num) {
//     console.log(num)
//     switch (num) {
//         case '1':
//             return 'зима';
//         case '2':
//             return 'весна';
//         case '3':
//             return 'літо';
//         case '4':
//             return 'осінь';
//         default: 
//             return 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//     }
// }
// console.log(getSeason(num));

/* end region Задача 3 */


/* region Задача 4 /*

// Отримуйте від користувача число (кількість хвилин) через prompt і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const totalMinutes = Number(prompt('Введіть кількість хвилин'));
// console.log(formatTime (totalMinutes));
// function formatTime (totalMinutes) {
// const hours = Math.floor(totalMinutes / 60);
// const modifiedHours = String(hours).padStart(2, 0);
// const minutes = totalMinutes % 60;
// const modifiedMinutes = String(minutes).padStart(2, 0);
// return `${modifiedHours}:${modifiedMinutes}`;
// }

/* end region Задача 4 */


/* region Задача 7 /*

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі і поверніть її з функції.

// function getNumbers(min, max) {
//     let total = 0;
//     for (let i=max; i>= min; i--){
//         console.log(i);
//         if (i % 2 === 0) {
//             total += i;
//         }
//     }
//     return total;
// }
// console.log(getNumbers(30, 50));

/* end region Задача 4 */
