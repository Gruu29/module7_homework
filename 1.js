function printKeys (obj) {
    // Запускаем цикл по элементам обьекта
    for (let key in obj) {
        // Делаем проверку, есть ли у obj свойство указанное в переменной key
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}
// Создаем обьект с некоторыми свойствами
const phone = {
    memorySize: "128gb",
    OSversion: "16",
}
// Создаем обьект с прототипом
const iPhone = Object.create(phone);
// Добовляем обьекту несколько собственных свойств
iPhone.Age = "12";
iPhone.Color = "white";

// Вызываем функцию, в которую передаем выше созданный обьект, для вывода в консоль списка собственных свойств
console.log('Свойства 1 obj')
printKeys(phone);
console.log('Свойства 2 obj');
printKeys(iPhone);