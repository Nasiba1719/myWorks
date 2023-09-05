const employees = [
    { name: 'John', age: 30, department: 'Marketing' },
    { name: 'Jane', age: 25, department: 'Finance' },
    { name: 'Jim', age: 35, department: 'Sales' },
    { name: 'Bob', age: 40, department: 'Marketing' },
    { name: 'Sue', age: 28, department: 'Finance' }
];

function filterEmployees(data, condition, callback) {
    const filteredData = data.filter(function (item) {
        return condition(item)
    });

    callback(filteredData);
}

function isMarketing(employee) {
    return employee.department === 'Marketing';
}

filterEmployees(employees, isMarketing, function (result) {
    console.log(result);
});

