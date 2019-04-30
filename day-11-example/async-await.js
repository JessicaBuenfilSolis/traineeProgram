(async function() {
  const getValue = () => Promise.resolve(10);
  const multiply = (x, y) => {
    return new Promise(function(resolve, reject) {
      return setTimeout(() => {
        console.log(`executing after 2 seconds`);
        return resolve(x + y);
      }, 2000);
    });
  };

  try {
    var value = await getValue();
    var double = await multiply(2, value);
    var all = await Promise.all([Promise.resolve(2), Promise.resolve(2)]);
    console.log(all);
  } catch (err) {
    console.log("err: ", err);
  }
  console.log("double: ", double);
  console.log("this is no waitting");
})();
