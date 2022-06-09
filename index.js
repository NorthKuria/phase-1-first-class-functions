const receivesAFunction = (cbfunc) => {
  cbfunc();
  return;
};

const returnsANamedFunction = () => {
  return function returnfunc() {
    console.log("returned function");
  };
};

const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("returned anon");
  };
};
