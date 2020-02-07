import React, { Component } from "react";

const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };
    componentDidMount() {
      importComponent().then(com => {
        this.setState({ component: com.default });
      });
    }
    render() {
      const Cpn = this.state.component;
      return Cpn ? <Cpn {...this.props} /> : null;
    }
  };
};
export default asyncComponent;
