/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode,
};

class Portal extends Component<PortalProps> {
  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount():void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount():void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}


class MyComponent extends Component<{}, { count: number }> {
  state = {
    count: 0,
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div onClick={this.handleClick}>
        <h1>
          Clicks:
          {count}
        </h1>
        <Portal>
          <h2>TEST PORTAL</h2>
          <button type="button">Click</button>
        </Portal>
      </div>
    );
  }
}

const App:React.FC = () => <MyComponent />;

export default App;
