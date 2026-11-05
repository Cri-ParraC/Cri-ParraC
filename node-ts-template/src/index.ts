import { parseArgs } from "node:util";
import { greet } from "./greet.ts";

const { values } = parseArgs({
  options: {
    name: { type: "string", short: "n", default: "world" },
    excited: { type: "boolean", short: "e", default: false },
  },
});

console.log(greet({ name: values.name, excited: values.excited }));
