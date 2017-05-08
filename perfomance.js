const Benchmark     = require('benchmark');
const suite         = new Benchmark.Suite;
const binarySearch  = require('./binarySearch');
const indexOfSearch = require('./searchIndexOf');

const data = Array.from({ length: 1000000 }, (_, i) => i + 1);


suite
    .add('indexOfSearch', function () {
        indexOfSearch(data, 1000000)
    })
    .add('binarySearch', function () {
        binarySearch(data, 1000000)
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });

// for 1 000 000
// indexOfSearch x 715 ops/sec ±5.77% (86 runs sampled)
// binarySearch x 11,882,708 ops/sec ±0.38% (92 runs sampled)
// Fastest is binarySearch

// for 2
// indexOfSearch x 68,039,708 ops/sec ±0.39% (92 runs sampled)
// binarySearch x 14,094,596 ops/sec ±0.31% (91 runs sampled)
// Fastest is indexOfSearch
