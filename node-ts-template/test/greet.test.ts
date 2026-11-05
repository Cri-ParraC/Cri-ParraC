import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.ts";

describe("greet", () => {
  it("greets by name", () => {
    assert.equal(greet({ name: "Ada" }), "Hello, Ada.");
  });

  it("adds excitement when asked", () => {
    assert.equal(greet({ name: "Ada", excited: true }), "Hello, Ada!");
  });

  it("falls back to 'world' for blank names", () => {
    assert.equal(greet({ name: "   " }), "Hello, world.");
  });
});
