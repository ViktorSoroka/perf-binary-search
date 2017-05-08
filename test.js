const should        = require('chai').should();
const binarySearch  = require('./binarySearch');
const indexOfSearch = require('./searchIndexOf');
const data          = Array.from({ length: 1000000 }, (_, i) => i + 1);


describe('binarySearch', function () {
    it('should return 0 when passed 1', function () {
        binarySearch(data, 1).should.equal(0);
    });

    it('should return 999999 when passed 1000000', function () {
        binarySearch(data, 1000000).should.equal(999999);
    });
});

describe('indexOfSearch', function () {
    it('should return 0 when passed 1', function () {
        indexOfSearch(data, 1).should.equal(0);
    });

    it('should return 999999 when passed 1000000', function () {
        indexOfSearch(data, 1000000).should.equal(999999);
    });
});