/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// Чесно кажучі не дуже зрозумів завдання, але залишу тут один interface та один type

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

type KeyValue<T> = {
  [K in keyof T]: T[K];
};

export {};
