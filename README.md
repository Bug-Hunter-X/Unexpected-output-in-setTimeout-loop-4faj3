# Unexpected Output in setTimeout Loop
This code demonstrates a common issue with closures in JavaScript when using `setTimeout` inside a loop.  The expected output is the numbers 1 through 5, but due to how closures capture variables, the output is actually 6 repeated five times. This is because the `setTimeout` callback function doesn't execute until after the loop has completed, and by then, the value of `i` has already reached 6. 

## Bug
The `printNumbers2` function attempts to print numbers 1 through n with a 0ms delay using `setTimeout`. However, due to the closure over `i`, the loop finishes before any of the `setTimeout` callbacks fire and they all have the final value of `i` which is n+1.  See `bug.ts` for details.

## Solution
The solution uses an Immediately Invoked Function Expression (IIFE) to create a new scope for each iteration of the loop, ensuring that each callback function has its own copy of the `i` variable. See `bugSolution.ts` for the corrected code.