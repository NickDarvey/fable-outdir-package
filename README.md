# fable-outdir-package

This Fable project can't be built into an output directory named 'obj'. Other directories work.

## Repro
1. `dotnet restore`
1. `dotnet fable Optml.Html.Fable.Tests --noRestore --outDir obj/tests`

## Expected

The project is built into `obj/tests`.

- Doesn't work: `dotnet fable Optml.Html.Fable.Tests --noRestore --outDir obj`
- Doesn't work: `dotnet fable Optml.Html.Fable.Tests --outDir obj`
- Works: `dotnet fable Optml.Html.Fable.Tests --outDir bin`
- Works: `dotnet fable Optml.Html.Fable.Tests`

## Actual
```
❯ dotnet fable Optml.Html.Fable.Tests --outDir obj/tests  
Fable: F# to JS compiler 3.2.9
Optml.Html.Fable.Tests> cmd /C dotnet restore Optml.Html.Fable.Tests.fsproj
  Determining projects to restore...
  All projects are up-to-date for restore.
Parsing Optml.Html.Fable.Tests\Optml.Html.Fable.Tests.fsproj...
Initializing F# compiler...
Compiling Optml.Html.Fable.Tests\Optml.Html.Fable.Tests.fsproj...
F# compilation finished in 2093ms
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(3,22): (3,27) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(4,22): (4,27) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(5,23): (5,28) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(13,44): (13,49) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(14,36): (14,41) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(15,37): (15,42) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(16,48): (16,53) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(17,71): (17,76) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(19,11): (19,16) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(20,5): (20,17) error FSHARP: Lookup on object of indeterminate type based on information prior to this program point. A type annotation may be needed prior to this program point to constrain the type of the object. This may allow the lookup to be resolved. (code 72)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(21,36): (21,41) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Testing.Fable.fs(23,25): (23,30) error FSHARP: The value, constructor, namespace or type 'Mocha' is not defined. (code 39)
C:/repos/fable-outdir-package/Optml.Html.Tests/Example.fs(6,3): (6,11) error FSHARP: This value is not a function and cannot be applied. (code 3)
C:/repos/fable-outdir-package/Optml.Html.Tests/Program.fs(6,13): (6,21) error FSHARP: This value is not a function and cannot be applied. (code 3)
Compilation failed
```

## Work-arounds

Use any other directory.