function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j){
      setTimeout(() => {
        console.log(j); 
      }, 0);
    })(i);
  }
}

printNumbers2(5); // this will print 1 to 5 