// import moment from "./lib/moment";
var from = dateToMoment("now-6h", false);
console.log(from);
// var to = dateToMoment(1595997360000, true);
// var from = moment(1595997350000);
// var to = moment(1595997360000);
// var date = moment();
// console.log(getQueryIntervals(from, to));







// var res1 = moment(Date.now(), 'YYYY-MM-DD HH:mm:ss').valueOf();
// var res2 = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

// console.log('res1 = ');
// console.log(res1);
// console.log('res2 = ');
// console.log(res2);


function getQueryIntervals(from, to) {
  return [from.toISOString() + '/' + to.toISOString()];
}


function dateToMoment(date, roundUp) {
  if (date === 'now') {
    return moment();
  }
  date = dateMath.parse(date, roundUp);
  return moment(date.valueOf());
}

