function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
    

//function isVowel
function isVowel(input){
    var vowels = (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	
    for (var i = 0; i <= vowels.length; i++){
        if (input != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
console.log("Expected output of isVowel('b') is false : " + myFunctionTest(true, isVowel('b')));

// function to sum
function sum(arr) {
    var result = 0
    for(const  i of arr){
        result +=i;
    }
    return result;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));

// function to multiply
function multiply(arr) {
    var result = 1;
    for(const i in arr){
        result *= arr[i];
    }
    return result;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));

// function to reverse string
function reverse(s) {
    var arr =s.split('');
    arr.indexOf();
    return arr.map(s=>arr[arr.length - arr.indexOf(s)-1]).reduce((t,s)=> t + '' + s,'');

}
console.log("Expected output of reverse('haben') is nebah  " + myFunctionTest('nebah', reverse('haben')));


// function to find the longest word
function findLongestWords(arr,i) {
    let arr2 = [];
    let j = 0;
    for(let e of arr){
        if (e.length > i) {
            arr2[j++] = e;
        }
    }
    return arr2;

}
console.log("Expected output of findLongestWord(['ab','abc','abcd','abcdef']) is 'abcdef'  " 
                  + myFunctionTest('abcdef',findLongestWords(['ab','abc','abcd','abcdef'],5).toString()));
