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

        it('should return 29 when given XXIX', function() {
            equal(subject.convert('XXIX'), 29);
        })

        it('should return 24 when given XXIV', function() {
            equal(subject.convert('XXIV'), 24);
        })

        it('should return 44 when given XLIV', function() {
            equal(subject.convert('XLIV'), 44);
        })

        it('should return 59 when given LIX', function() {
            equal(subject.convert('LIX'), 59);
        })

        it('should return 99 when given XCIX', function() {
            equal(subject.convert('XCIX'), 99);
        })

        it('should return 459 when given CDLIX', function() {
            equal(subject.convert('CDLIX'), 459);
        })
        
        it('should return 2948 when given MMCMXLVIII', function() {
            equal(subject.convert('MMCMXLVIII'), 2948);
        })
    })
})