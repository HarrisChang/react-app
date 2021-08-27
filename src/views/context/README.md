## React Context 的用法

### 1. 生产数据

#### 1.1 创建 Context 并通过 Provider 传递给子组件

```js
const FamilyContext = React.createContext({ name: 'harris', age: 18 });

export default class Context extends Component {
  state = {
    contextObj: {
      name: 'MyContext',
      age: 20
    }
  };
  render() {
    return (
      <div className="context-wrap">
        <h1>Context</h1>
        Context 级别的参数为：name-{this.state.contextObj.name}, age-{this.state.contextObj.age}
        <FamilyContext.Provider value={this.state.contextObj}>
          <Family />
        </FamilyContext.Provider>
      </div>
    );
  }
}
```

### 2. 消费数据

#### 2.1 通过 ContextType 接收参数

挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。此属性能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。

```js
class Family extends Component {
  static contextType = FamilyContext;
  componentDidMount() {
    console.log('FAMILY-CONTEXT:', this.context);
  }
  render() {
    return (
      <div className="context-family-wrap">
        <h2>Family</h2>
        Context 级别的参数为：name-{this.context.name}, age-{this.context.age}
        <Parent />
      </div>
    );
  }
}
```

#### 2.2 通过 Counsumer 接收参数

```js
class Parent extends Component {
  render() {
    return (
      <FamilyContext.Consumer>
        {(context) => {
          console.log('PARENT-CONTEXT:', context);
          return (
            <div className="context-parent-wrap">
              <h3>Parent</h3>
              Parent 级别的参数为：name-{context.name}, age-{context.age}
              <Son />
            </div>
          );
        }}
      </FamilyContext.Consumer>
    );
  }
}
```

### 3. defaultValue 默认值

**只有** 当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。注意：将 `undefined` 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。

```js
class Other extends Component {
  static contextType = FamilyContext;
  componentDidMount() {
    console.log('OTHER-CONTEXT:', this.context);
  }
  render() {
    return (
      <div className="context-other-wrap">
        <h2>Other</h2>
      </div>
    );
  }
}

export default class Context extends Component {
  state = {
    contextObj: {
      name: 'MyContext',
      age: 20
    }
  };
  render() {
    return (
      <div className="context-wrap">
        <h1>Context</h1>
        Context 级别的参数为：name-{this.state.contextObj.name}, age-{this.state.contextObj.age}
        <FamilyContext.Provider value={this.state.contextObj}>
          <Family />
        </FamilyContext.Provider>
        <Other />
      </div>
    );
  }
}
```

Other Component 未被 Provider 包裹，打印出来的 context 为 defaultValue。


