function hasProperty (str, obj) {
    let result = false;
    // Запускаем цикл по элементам обьекта
    for (let key in obj) {
        // Делаем проверку, сравниваем значение переменной str с значением переменной key
        if (str === key) {
            result = true;
        }
    }

    return result;
}
// Создаем обьект с некоторыми свойствами
const phone = {
    memory: "64gb",
    version: "10",
}
// Создаем обьект с прототипом
const iPhone = Object.create(phone);
// Добовляем обьекту несколько собственных свойств
iPhone.Age = "13";
iPhone.Color = "blue";

// Вызываем функцию, в которую передаем выше созданный обьект, для вывода в консоль списка собственных свойств
console.log('Свойства 1 obj')
console.log(hasProperty('Color', phone));
console.log('Свойства 2 obj');
console.log(hasProperty('Color', iPhone));