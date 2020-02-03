/********************
 * YOUR CODE BELOW! *
 ********************/
const iGetTheJoke = true;
const havingFun = false;
const learning = false;
const killingIt = iGetTheJoke && havingFun;

function returnFalse(always){
  return false
} 

function isOpposite(yes){
  return !yes
}

function both(boolean,boolean2){
  return boolean && boolean2
}
function either(boolean,boolean2){
  return boolean || boolean2
}
function firstOnly(boolean,boolean2){
  return boolean && !boolean2
}


function secondOnly(boolean,boolean2){
  return !boolean && boolean2
}
function neither(boolean,boolean2){
  return !boolean2 && !boolean
}
function itsComplicated(boolean,boolean2,boolean3){
  return !boolean || boolean2 && boolean3
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}