window.addEventListener("load", function() {
  const blog = require("./components/blog.js");
  blog.init();
});

// promise: then (theneable)
// catch method
// Promise Stages:
// 1. Pending (in process)
// 2. Resolved (success)
// 3. Rejected (error)
// 4. Settled (done = success | error)

// // CPS - Continuation Passing Style
// function multiplier(factor1, factor2, cb) {
//   cb(factor1 * factor2);
// }

// multiplier(2, 2, function(result) {
//   console.log(result);
// });
