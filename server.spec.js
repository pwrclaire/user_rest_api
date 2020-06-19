import supertest from "supertest";
import app from "./server";

const request = supertest(app);

describe("endpoint testing", () => {
  it("gets a random uuid", async (done) => {
    const resp = await request.get("/user/id");
    expect(resp.status).toBe(200);
    expect(resp.body.id).toHaveLength(36);
    done();
  });

  it("creates a html page", async (done) => {
    const resp = await request.get("/user/bob");
    expect(resp.status).toBe(200);
    expect(resp.text).toBeDefined();
    done();
  });

  it("tries to save a new user and creates html page", async (done) => {
    const resp = await request.post("/user");
    expect(resp.status).toBe(200);
    expect(resp.text).toBeDefined();
    done();
  });

  afterAll(async (done) => {
    done();
  });
});
