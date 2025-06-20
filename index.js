const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee= {...employee}
    newEmployee[key]=value
    return newEmployee
}
updateEmployeeWithKeyAndValue(employee, "name","Jared")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress= '12 Broadway'
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee2 = { ...employee }; // shallow clone
    delete newEmployee2['name'];             // delete the key from the copy
    return newEmployee2;                  // return the new object
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}