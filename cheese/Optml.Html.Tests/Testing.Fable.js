import { Mocha_runTests, Test_ptestCase, Test_testCase, Test_testList } from "../.fable/Fable.Mocha.2.11.0/Mocha.fs.js";
import { Attribute } from "../.fable/fable-library.3.2.9/Types.js";
import { class_type } from "../.fable/fable-library.3.2.9/Reflection.js";

export const testList = (name) => ((tests) => Test_testList(name, tests));

export const testCase = (name) => ((body) => Test_testCase(name, body));

export const ptestCase = (name) => ((body) => Test_ptestCase(name, body));

export class TestsAttribute extends Attribute {
    constructor() {
        super();
    }
}

export function TestsAttribute$reflection() {
    return class_type("Optml.Html.Testing.TestsAttribute", void 0, TestsAttribute, class_type("System.Attribute"));
}

export function TestsAttribute_$ctor() {
    return new TestsAttribute();
}

export function run(_arg1, tests) {
    return Mocha_runTests(tests);
}

