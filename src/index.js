export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Выбранный персонаж уже есть в команде!");
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(400, "Bad Request");
    this.errors.set(503, "Service Unavailable");
    this.errors.set(403, "Forbidden");
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return "Unknown error";
  }
}
