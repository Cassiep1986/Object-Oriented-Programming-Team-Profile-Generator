const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initilization", () => {
    it("should create an object containing engineer name, email, id and github", () => {
      //Arrange
      const engineer = new Engineer("John", "Johndoe@gmail.com", 314, "jd516");
      //Assert
      expect("name" in engineer).toBe(true);
      expect("email" in engineer).toBe(true);
      expect("id" in engineer).toBe(true);
      expect("github" in engineer).toBe(true);
    });

    it("should set the name property of the engineer", () => {
      //Arrange
      const engineer = new Engineer("John", "Johndoe@gmail.com", 314, "jd516");
      //Assert
      expect(engineer.name).toBe("John");
    });

    it("should set the email property of the engineer", () => {
      //Arrange
      const engineer = new Engineer("John", "Johndoe@gmail.com", 314, "jd516");
      //Assert
      expect(engineer.email).toBe("Johndoe@gmail.com");
    });

    it("should set the ID property of the engineer", () => {
      //Arrange
      const engineer = new Engineer("John", "Johndoe@gmail.com", 314, "jd516");
      //Assert
      expect(engineer.id).toBe(314);
    });

    it("should set the github property of the engineer", () => {
        //Arrange
        const engineer = new Engineer("John", "Johndoe@gmail.com", 314, "jd516");
        //Assert
        expect(engineer.github).toBe("jd516");
    });
  });
});
