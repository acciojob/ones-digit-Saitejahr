function onesDigit(n) {
  // your code here
	
	return Math.floor(n % 10);
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
