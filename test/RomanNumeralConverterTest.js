import { equal } from 'assert';
import RomanNumeralConverter from '../src/RomanNumeralConverter.js';

describe('RomanNumeralConverter.js', function() {
    describe('convertRomanNumeral', function() {
        var subject = new RomanNumeralConverter();

        it('should return 1 when given I', function() {
            equal(subject.convert('I'), 1);
        })

        it('should return 2 when given II', function() {
            equal(subject.convert('II'), 2);
        })

        it('should return 5 when given V', function() {
            equal(subject.convert('V'), 5);
        })

        it('should return 4 when given IV', function() {
            equal(subject.convert('IV'), 4);
        })

        it('should return 7 when given VII', function() {
            equal(subject.convert('VII'), 7);
        })

        it('should return 9 when given IX', function() {
            equal(subject.convert('IX'), 9);
        })

        it('should return 12 when given XII', function() {
            equal(subject.convert('XII'), 12);
        })
    })
})