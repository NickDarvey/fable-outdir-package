module Optml.Html.Tests.Example

open Optml.Html.Testing

let tests =
  testList "example" [
    testCase "case" <| fun _ ->
      Expect.equal "Thing" Optml.Html.Fable.Example.Thing
  ]
