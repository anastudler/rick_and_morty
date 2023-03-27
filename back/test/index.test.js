const app = require("../src/app");
const session = require("supertest");
const { response } = require("../src/app");
const agent = session(app);

describe("Route: GET rickandmorty/onsearch/:id", () => {
  it("Responde con status: 200", async () => {
    const response = await agent.get("/rickandmorty/onsearch/1");
    expect(response.statusCode).toBe(200);
  });
  test("Responde un objeto con las propiedades: id, name, species, gender e image", async () => {
    const response = await agent.get("/rickandmorty/onsearch/1");
    expect(Object.keys(response.body)).toEqual([
      "id",
      "name",
      "image",
      "gender",
      "species",
    ]);
  });
  //con promesas
  it("Responde con status: 500", async () => {
    return agent
      .get("/rickandmorty/onsearch/1000")
      .send()
      .then((response) => expect(response.statusCode).toBe(500));
    // const response = await agent.get("/rickandmorty/onsearch/1000");
    // expect(response.statusCode).toBe(500);
  });
});
