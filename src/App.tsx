import React, { Component } from 'react';

/*

-------------------------------------------------------- useState --------------------------------------------------
// 1 ВАРИАНТ: Неявное представление типа number
(useState - чистая функция, возвращает точто такие же типы, какие были ей переданы)
const [value, setValue] = useState(0);

// 2 ВАРИАНТ: Явное приведение типов
const [value, setValue] = useState<number | undefined>(undefined);
const [value, setValue] = useState<Array<number>>([]);

// 3 ВАРИАНТ:
interface IUser {
  name: string;
  age?: number;
}

const [value, setValue] = useState<IUser>({ name: 'Yauhen' });


---------------------------------------------------------- useRef --------------------------------------------------
// 1 ВАРИАНТ: Только для чтения и управления через React
const ref1 = useRef<HTMLElement>(null!);

// 2 ВАРИАНТ: Для изменения и самостоятельного конфигурирования
const ref2 = useRef<HTMLElement | null>(null);


-------------------------------------------------------- useContext ------------------------------------------------
interface ITheme {
  backgroundColor: string;
  color: string;
}

// Создание контекста
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
})


// Доступ к контекту в дочернем компоненте
const themeContext = useContext<ITheme>(ThemeContext);


--------------------------------------------------------- useReducer --------------------------------------------------
interface State { count: number; }
type Action = { type: 'increment' | 'decrement' }

const counterReducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment': return { count: count + 1 };
    case 'decrement': return { count: count - 1 };
    default: return {};
  }
};

const [state, dispatch] = useReducer(counterReducer, { count: 0 });

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });


---------------------------------------------------- useCallback & useMemo ---------------------------------------------
// Callback
// Неявное представление типа number
(useCallback - чистая функция, возвращает точто такие же типы, какие были ей переданы)
const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);

// Memo
(useCallback - чистая функция, возвращает точто такие же типы, какие были ей переданы)
// Inferred as (value1: number, value2: number) => number
// Указываем типы элементов
const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


------------------------------------------------- useEffect & useLayoutEffect ------------------------------------------
// Типизация не нужна
useEffect(() => {
  const subscriber = subscribe(options);
  return () => {
    unsubscribe(subscriber)
  };
}, [options]);


*/


const App:React.FC = () => null;

export default App;
