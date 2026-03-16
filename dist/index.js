"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(c,t){
var a=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-sqrt/dist'),n=require('@stdlib/constants-float64-pinf/dist');function q(e,r){return i(e)||i(r)||r<0||r>1||!a(e)||e===n?NaN:v(e*r*(1-r))}t.exports=q
});var N=s();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
