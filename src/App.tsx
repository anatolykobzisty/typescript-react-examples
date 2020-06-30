import React, { Component } from 'react';

type CounterState = {
  count: number,
};

type CounterProps = {
  title?: string,
};

class Counter extends Component<CounterProps, CounterState> {
  static defaultProps: CounterProps = {
    title: 'Default counter: ',
  };

  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }


  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    // eslint-disable-next-line no-constant-condition
    return false ? { count: 2 } : null;
  }

  componentDidMount():void {

  }

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true;
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });

  //  this.state.count = count += 1; по умолчанию в новых версиях ts-react для state стоит флаг readonly
  };

  render() {
  //  this.props.title = '';  по умолчанию в новых версиях ts-react для props стоит флаг readonly
    const { count } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h1>
          {title}
          {count}
        </h1>
        <button type="button" onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

const App = () => <Counter title="Counter: " />;

export default App;
