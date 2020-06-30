import React from 'react';

/*
  1 способ

const Title: React.FC<{title: string}> = ({ title, children }) => (
  <h1>
    {title}
    {children}
  </h1>
);

*/

// 2 способ

type TitleProps = {
  title: string,
  test?: string, // необязательный параметр
};

const Title = ({ title, test = 'test' }: TitleProps) => (
  <h1>
    {title}
    {test}
  </h1>
);

const App = () => <Title title="test" />;

export default App;
