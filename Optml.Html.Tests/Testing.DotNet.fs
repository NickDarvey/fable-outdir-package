module Optml.Html.Testing

let testList name tests =
  Expecto.Tests.testList name tests
let testCase name tests =
  Expecto.Tests.testCase name tests
let ptestCase name tests =
  Expecto.Tests.ptestCase name tests

type TestsAttribute = Expecto.TestsAttribute

module Expect =
  let inline equal expected actual = Expecto.Expect.equal actual expected ""
  let inline isTrue actual = Expecto.Expect.isTrue actual ""
  let inline isFalse actual = Expecto.Expect.isFalse actual ""
  let inline hasLength expected actual = Expecto.Expect.hasLength actual expected ""
  let inline stringStarts prefix actual = Expecto.Expect.stringStarts actual prefix ""
  let inline wantSome actual = Expecto.Expect.wantSome actual ""
  let inline isNone actual = Expecto.Expect.isNone actual ""

module Dom =
  let implementation = Optml.Html.DotNet.Dom.implementation

let run args tests = Expecto.Tests.runTestsWithCLIArgs [] args tests
