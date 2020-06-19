import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";

class Service {
  generateId() {
    return uuidv4();
  }

  async saveUser() {
    try {
      const result = await (
        await fetch("http://localhost:3000/db/save", {
          method: "POST",
        })
      ).json();
      return result;
    } catch (e) {
      return false;
    }
  }
}

export { Service };
