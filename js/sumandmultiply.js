
function sum(t,a) {
    return t + a;
}
function arraySum(arr){
	return arr.reduce(sum);
}

function multiply(t,a){
    return t * a;
}
function arrayMultiply(arr){
	return arr.reduce(multiply);
}


function reverse(s){
    return s.split('').reverse().join('')
}

function filterLongWords(arr, i){
	var filtered=[];
	var index =0;
	for(var j=0; j<arr.length; j++){
		if(arr[j].length > i){
			filtered[index] = arr[j];
			index++;
		}
	}
    return filtered;
}

