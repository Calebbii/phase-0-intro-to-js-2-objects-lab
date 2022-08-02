// Write your solution in this file!
const employee = {
    name: "caleb",
    streetAddress: "Kejani"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let updateList = {...employee};
    updateList[key] = value;
    return updateList;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let clone = {...employee};
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}