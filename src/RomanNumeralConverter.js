export default class RomanNumeralConverter{

    convert(numeral) {
        
        if(numeral == 'IV') {
            return 4;
        } else if(numeral.includes('V')) {
            return 5 + this.countIs(numeral);
        }
        return numeral.length;
    }

    countIs(numeral) {
        return numeral.split('I').length - 1;
    }
}