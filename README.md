# Type Error in TypeScript Function

This example demonstrates a common type error in TypeScript that occurs when passing an argument of an incorrect type to a function.

## Bug

The function `add` is defined to accept two numeric parameters and return their sum. However, the code attempts to call `add` with a string ('10') as the second argument, resulting in a type error. 

## Solution

The solution involves ensuring that the arguments passed to the function are of the correct type.  This can be achieved through type checking or type assertion.