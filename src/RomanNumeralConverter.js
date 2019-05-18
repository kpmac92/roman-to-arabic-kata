export default class RomanNumeralConverter{

    specialCharMap = new Map([["V", 5], ["X", 10]]);

    convert(numeral) {
        var value = 0;
        var charArray = numeral.split('');

        for(var i = 0; i < charArray.length; i++) {
            let char = charArray[i];
            let nextChar = charArray[i+1];
            if(this.specialCharMap.has(char)) {
                value += this.specialCharMap.get(char);
            } else if(this.isSubtraction(char, nextChar)) {
                value--;
            }
            else {
                value++;
            }
        }

        return value;
    }

    isSubtraction(char, nextChar) {
        return char == 'I' && this.specialCharMap.has(nextChar);
    }
}