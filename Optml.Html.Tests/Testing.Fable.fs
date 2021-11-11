module Optml.Html.Testing

let testList = Fable.Mocha.Test.testList
let testCase = Fable.Mocha.Test.testCase
let ptestCase = Fable.Mocha.Test.ptestCase

/// Dummy Tests attribute type (to replace the Expecto one which we use when running on .NET)
type TestsAttribute() = inherit System.Attribute()

module Expect =
  // Inline because otherwise:
  // FABLE: Cannot get type info of generic parameter a$. Fable erases generics at runtime, try inlining the functions so generics can be resolved at compile time.
  let inline equal expected actual = Fable.Mocha.Expect.equal actual expected ""
  let inline isTrue actual = Fable.Mocha.Expect.isTrue actual ""
  let inline isFalse actual = Fable.Mocha.Expect.isFalse actual ""
  let inline hasLength expected actual = Fable.Mocha.Expect.equal (Seq.length actual) expected ""
  let inline stringStarts (prefix : string) (actual : string) = Fable.Mocha.Expect.isTrue (actual.StartsWith prefix) ""
  let inline wantSome actual =
    Fable.Mocha.Expect.isSome actual ""
    actual.Value
  let inline isNone actual = Fable.Mocha.Expect.isNone actual ""

let run _ tests = Fable.Mocha.Mocha.runTests tests
