export default class RomanNumeralConverter{

    specialCharMap = new Map([["I", 1],["V", 5], ["X", 10], ["L", 50], ["C", 100]]);
    subtractionChars = ["I", "X", "C"];

    convert(numeral) {
        var value = 0;
        var charArray = numeral.split('');

        for(var i = 0; i < charArray.length; i++) {
            let char = charArray[i];
            let nextChar = charArray[i+1];
            
            if(this.isSubtraction(char, nextChar)) {
                value -= this.specialCharMap.get(char);
            } else {
                value += this.specialCharMap.get(char);;
            }
        }

        return value;
    }

    isSubtraction(char, nextChar) {
        return this.subtractionChars.includes(char) && this.specialCharMap.get(nextChar) > this.specialCharMap.get(char);
    }
}