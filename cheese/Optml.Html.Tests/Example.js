import { testCase, testList } from "./Testing.Fable.js";
import { Thing } from "../Optml.Html.Fable/Example.js";
import { structuralHash, assertEqual } from "../.fable/fable-library.3.2.9/Util.js";
import { singleton, ofArray, contains } from "../.fable/fable-library.3.2.9/List.js";
import { equals, class_type, float64_type, bool_type, int32_type, string_type } from "../.fable/fable-library.3.2.9/Reflection.js";
import { printf, toText } from "../.fable/fable-library.3.2.9/String.js";

export const tests = testList("example")(singleton(testCase("case")(() => {
    let copyOfStruct;
    const expected_1 = "Thing";
    const msg = "";
    if ((Thing === expected_1) ? true : (!(new Function("try {return this===window;}catch(e){ return false;}"))())) {
        assertEqual(Thing, expected_1, msg);
    }
    else {
        const errorMsg = contains((copyOfStruct = Thing, string_type), ofArray([int32_type, bool_type, float64_type, string_type, class_type("System.Decimal"), class_type("System.Guid")]), {
            Equals: (x, y) => equals(x, y),
            GetHashCode: (x) => structuralHash(x),
        }) ? toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%s\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(expected_1)(Thing)(msg) : toText(printf("\u003cspan style=\u0027color:black\u0027\u003eExpected:\u003c/span\u003e \u003cbr /\u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eActual:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px;color:crimson\u0027\u003e%A\u003c/div\u003e\u003cbr /\u003e\u003cspan style=\u0027color:black\u0027\u003eMessage:\u003c/span\u003e \u003c/br \u003e\u003cdiv style=\u0027margin-left:20px; color:crimson\u0027\u003e%s\u003c/div\u003e"))(expected_1)(Thing)(msg);
        throw (new Error(errorMsg));
    }
})));

