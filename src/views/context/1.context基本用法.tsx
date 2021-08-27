import React, { Component } from 'react';
const FamilyContext = React.createContext({ name: 'harris', age: 18 });
import './index.scss';

class Son extends Component {
  render() {
    return (
      <div className="context-son-wrap">
        <h4>Son</h4>
      </div>
    );
  }
}

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

class Family extends Component {
  static contextType = FamilyContext;
  componentDidMount() {
    console.log('FAMILY-CONTEXT:', this.context);
  }
  render() {
    return (
      <div className="context-family-wrap">
        <h2>Family</h2>
        Family 级别的参数为：name-{this.context.name}, age-{this.context.age}
        <Parent />
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
      </div>
    );
  }
}
