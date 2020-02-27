require("dotenv").config();

describe("Server", () => {
  describe("Environment", () => {
    it("Should Use the Test Env", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});