const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initilization", () => {
    it("should create an object containing intern name, email id and school", () => {
      //Arrange
      const intern = new Intern("Jill", "Jillybean@gmail.com", 254, "UofA");
      //Assert
      expect("name" in intern).toBe(true);
      expect("email" in intern).toBe(true);
      expect("id" in intern).toBe(true);
      expect("school" in intern).toBe(true);
    });

    it("should set the name property of the intern", () => {
      //Arrange
      const intern = new Intern("Jill", "Jillybean@gmail.com", 254, "UofA");
      //Assert
      expect(intern.name).toBe("Jill");
    });

    it("should set the email property of the intern", () => {
      //Arrange
      const intern = new Intern("Jill", "Jillybean@gmail.com", 254, "UofA");
      //Assert
      expect(intern.email).toBe("Jillybean@gmail.com");
    });

    it("should set the ID property of the intern", () => {
      //Arrange
      const intern = new Intern("Jill", "Jillybean@gmail.com", 254, "UofA");
      //Assert
      expect(intern.id).toBe(254);
    });

    it("should set the school property of the intern", () => {
        //Arrange
        const intern = new Intern("Jill", "Jillybean@gmail.com", 254, "UofA");
        //Assert
        expect(intern.school).toBe("UofA");
    });
  });
});
