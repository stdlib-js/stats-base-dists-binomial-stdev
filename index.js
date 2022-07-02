// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=Math.floor,t=function(t){return e(t)===t&&t>=0},n=function(e){return e!=e},o=Math.sqrt,f=Number.POSITIVE_INFINITY;return function(e,r){return n(e)||n(r)||r<0||r>1||!t(e)||e===f?NaN:o(e*r*(1-r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stdev=t();
//# sourceMappingURL=index.js.map
