const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Software Engineer' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'HR Specialist' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Financial Analyst' },
      //... More employee records can be added here
    ]; 
    // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
function calculateTotalSalaries(){
const totalSalary= employees.reduce( (accumulator, employee)=> accumulator + employee.salary, 0);
alert(`Total Salary: ${totalSalary} - ${employee.specialization}`);
}
function displayHREmployees(){
const hrEmployees = employees.filter(e =>e.department==='HR');
console.log(hrEmployees);
if(hrEmployees.length === 0){
    document.getElementById('employeesDetails').innerHTML = '<p>No HR employees found.</p>';
} else {
    hrEmployees.forEach(employee => {
        document.getElementById('employeesDetails').innerHTML += `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`;
    });
}
}
function findEmployeeById(id){
    const employee = employees.find(e => e.id === id);
if(employee === undefined){
    document.getElementById('employeesDetails').innerHTML = `<p>Employee with ID ${id} not found.</p>`;
    return;
}   
document.getElementById('employeesDetails').innerHTML= `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization} </p>`;

}
function findEmployeeBySpecialization(specialization){
    const employee = employees.find(e => e.specialization === specialization);
if(employee === undefined){
    document.getElementById('employeesDetails').innerHTML = `<p>Employee with specialization ${specialization } not found.</p>`;
    return; 
}   
document.getElementById('employeesDetails').innerHTML= `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization} </p>`;

}