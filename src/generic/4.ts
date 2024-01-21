/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IComponent<TValue> {
  [key: string]: TValue;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IComponent<string>> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
