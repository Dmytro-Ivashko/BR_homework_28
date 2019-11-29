/**
 * // Реализовать класс Employee, описывающий работника, и создать массив работников банка.
 * // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
 * // Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
 * // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
 */

class Employee  {
    constructor (firstName, lastName, age, position ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
    }
}

class EmpTable {
    constructor(employeeArry) {
        this.employeeArry = employeeArry.slice(0);
    }
    getHtml() {
        let tbl = '<table border="1"> <caption>Bank employees</caption> <tr> <th>First Name</th> <th>Last Name</th> <th>Position</th></tr>';
        for (let tr of this.employeeArry) {
            tbl += `<tr><td>${tr.firstName}</td><td>${tr.lastName}</td><td>${tr.position}</td></tr>`;
          }
        document.write(`${tbl}`);      
    }
    
}

let bankEmployees = [
    new Employee("Dmytro", "Kotko", 35, "Manager"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Ivan", "Demko", 40, "Security"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
    new Employee("Zinaida", "Petrova", 65, "Clining Manager"),
]

let creatTable = new EmpTable(bankEmployees);
creatTable.getHtml()



