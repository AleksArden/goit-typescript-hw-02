/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
type Array = (string | number)[];

function getPromise(): Promise<Array> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
