module Optml.Html.Tests.Program

open Optml.Html.Testing

[<Tests>]
let tests = testList "Dom" [
  Optml.Html.Tests.Example.tests
]

[<EntryPoint>]
let main args = run args tests
