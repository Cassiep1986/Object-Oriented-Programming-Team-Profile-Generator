const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initilization", () => {
    it("should create an object containing employee name, email and id", () => {
      //Arrange
      const employee = new Employee("Jane", "Janedoe@gmail.com", 820);
      //Assert
      expect("name" in employee).toBe(true);
      expect("email" in employee).toBe(true);
      expect("id" in employee).toBe(true);
    });

    it("should set the name property of the employee", () => {
      //Arrange
      const employee = new Employee("Jane", "Janedoe@gmail.com", 820);
      //Assert
      expect(employee.name).toBe("Jane");
    });

    it("should set the email property of the employee", () => {
      //Arrange
      const employee = new Employee("Jane", "Janedoe@gmail.com", 820);
      //Assert
      expect(employee.email).toBe("Janedoe@gmail.com");
    });

    it("should set the ID property of the employee", () => {
      //Arrange
      const employee = new Employee("Jane", "Janedoe@gmail.com", 820);
      //Assert
      expect(employee.id).toBe(820);
      
    });
  });
});
