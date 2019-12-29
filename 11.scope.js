/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
    let one, two;// 321
    try {
      throw new Error(321);
    } catch (one) {
      (one = 123), (two = 321);
      console.log(one);//123node
    }
    console.log(one);//undefined
    console.log(two);
  })();