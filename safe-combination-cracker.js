var START_VAL = 0;
var END_VAL = 100;
var STEP = 2;
var combos = [];
var MAX_ROUND = 4;
var INIT_DIRECTION = true; // true = right, false = left
var AVE_TIME_EACH_TRY = 5; // seconds
var eachRoundMove = (END_VAL - START_VAL) / STEP;
var totMove = eachRoundMove * eachRoundMove * eachRoundMove;
var days = Math.floor(totMove * AVE_TIME_EACH_TRY / 60 / 60 / 24);
var hours = Math.floor(totMove * AVE_TIME_EACH_TRY / 60 / 60) % 24;
var minutes = Math.floor(totMove * AVE_TIME_EACH_TRY / 60) % 60;
console.log('Tổng thời gian ước tính: ' + (days > 0 ? days + ' ngày, ' : '') + hours + ' giờ ' + minutes + ' phút');
