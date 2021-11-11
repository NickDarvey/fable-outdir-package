import { run, testList } from "./Testing.Fable.js";
import { tests as tests_1 } from "./Example.js";
import { singleton } from "../.fable/fable-library.3.2.9/List.js";

export const tests = testList("Dom")(singleton(tests_1));

(function (args) {
    return run(args, tests);
})(typeof process === 'object' ? process.argv.slice(2) : []);

