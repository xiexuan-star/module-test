require(['a', 'b'], function (a, b) {
  const { foo } = a;
  const { bar } = b;
  console.log(foo, bar);
});
