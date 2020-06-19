import { Service } from "./service";

describe("service functions", () => {
  it("tests id generation", () => {
    const service = new Service();
    const id = service.generateId();
    expect(id).toHaveLength(36);
  });

  it("tests mock saving to database", async () => {
    const service = new Service();
    const result = await service.saveUser();
    expect(typeof result === "boolean").toBeTruthy();
  });
});
