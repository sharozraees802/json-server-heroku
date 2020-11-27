const faker = require("faker");

const generateEmployees = () => {
  let employees = [];

  for (let id = 1; id <= 10; id++) {
    let firstName = faker.name.findName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }
  return { employees: employees };
};
module.exports = generateEmployees;
