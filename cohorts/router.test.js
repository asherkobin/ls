const request = require("supertest");
const server = require("../api/server");

describe("Cohorts Router", () => {
  describe("Sanity", () => {
    expect(true).toBe(true);
  });

  describe("GET /", () => {
    it("shoud return 200 OK", async () => {
      const res = await request(server).get("/api/cohorts");
      expect(res.status).toBe(200);
    });

    it("should return an array", async () => {
      const res = await request(server).get("/api/cohorts");
      expect(Array.isArray(res.body).toBe(true));
    });
  });
});
