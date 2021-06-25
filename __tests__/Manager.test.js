const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initilization", () => {
    it("should create an object containing manager name, email id and office number", () => {
      //Arrange
      const manager = new Manager("Billy", "Billybob@gmail.com", 867, "5309");
      //Assert
      expect("name" in manager).toBe(true);
      expect("email" in manager).toBe(true);
      expect("id" in manager).toBe(true);
      expect("officeNumber" in manager).toBe(true);
    });

    it("should set the name property of the manager", () => {
      //Arrange
      const manager = new Manager("Billy", "Billybob@gmail.com", 867, "5309");
      //Assert
      expect(manager.name).toBe("Billy");
    });

    it("should set the email property of the manager", () => {
      //Arrange
      const manager = new Manager("Billy", "Billybob@gmail.com", 867, "5309");
      //Assert
      expect(manager.email).toBe("Billybob@gmail.com");
    });

    it("should set the ID property of the manager", () => {
      //Arrange
      const manager = new Manager("Billy", "Billybob@gmail.com", 867, "5309");
      //Assert
      expect(manager.id).toBe(867);
    });

    it("should set the officeNumber property of the manager", () => {
        //Arrange
        const manager = new Manager("Billy", "Billybob@gmail.com", 867, "5309");
        //Assert
        expect(manager.officeNumber).toBe("5309");
    });
  });
});