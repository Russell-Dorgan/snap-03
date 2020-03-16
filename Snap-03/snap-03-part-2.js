// Input: n=12
// Output: 28
// Dividers sum 1 + 2 + 3 + 4 + 6 + 12 = 28

//

function sumUniquePositiveFactors(number) {
	number = Math.abs(number);
	sum = 0;
	for (i=1; i<=36; i++) {
		if (36 % i === 0) {
			sum = sum + i;
		}
	}
	return sum;
}




console.log(sumUniquePositiveFactors(36))