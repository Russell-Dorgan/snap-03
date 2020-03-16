//Pseudocode

// PROGRAM inputtedEnoughToConvertMGToGram?:
// 		IF current_balance - mg_weight > 1000
// 			return true
// 		ELSE,
// 			return false
// 		END
// 	END


function convertToGrams(weight, units) {
	if (units === 'lb') {
		return weight * 453.592;
	}else if (units === 'kg') {
		return weight * 1000;
	}else if (units === 'mg') {
		return weight / 1000;
	}else {
		return weight;
	}
}

console.log(convertToGrams(3, "oz"))

//1 = sign: is an assignment
//2 = sign: allows it to be loose, estimate evaluate
//3 = sign: no flexibility must be exact

