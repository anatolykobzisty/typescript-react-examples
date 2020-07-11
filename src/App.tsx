/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react';

interface IContext {
  isAuth: boolean,
  toggleAuth: () => void,
}

// Создание контекста
const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

// Внутренний компонент (new syntax of static property)
class Login extends Component {
  static contextType = AuthContext;

  context!: React.ContextType<typeof AuthContext>;

  render() {
    const { toggleAuth, isAuth } = this.context;

    return (
      <button type="button" onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}

// Внутренний компонент (old variant with Consumer)
const Profile: React.FC = (): React.ReactElement => (
  <AuthContext.Consumer>
    {({ isAuth }: IContext) => (
      <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
    )}
  </AuthContext.Consumer>
);

// Корневой компонент
class Context extends Component<{}, { isAuth: boolean }> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => ({
      isAuth: !isAuth,
    }));
  };

  render() {
    const { isAuth } = this.state;
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

const App:React.FC = () => <Context />;

export default App;
