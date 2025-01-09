function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i); 
    }, 0);
  }
}

printNumbers2(5); // this will print 6 five times because of closure