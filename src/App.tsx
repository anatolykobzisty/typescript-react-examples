import React, { useState } from 'react';

type BaseProps = {
  primTitle: string,
  secTitle?: string,
};

type InjectedProps = {
  toggleStatus: boolean,
  toggle: () => void,
};

const Button = ({
  primTitle, secTitle, toggle, toggleStatus,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => (
  <button type="button" onClick={toggle}>
    {toggleStatus ? primTitle : secTitle}
  </button>
);

const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => (props: BaseProps) => {
  const [toggleStatus, toggle] = useState(false);

  return (
    <PassedComponent
      {...props} // типизация остаточных аргументов
      toggle={() => toggle(!toggleStatus)}
      toggleStatus={toggleStatus}
    />
  );
};

const ToogleButton = withToggle(Button);

const App:React.FC = () => <ToogleButton primTitle="Maint Title" secTitle="Additional Title" />;

export default App;
