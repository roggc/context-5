import CounterProvider, {
  useValues as useCounterValues,
  useActions as useCounterActions,
} from "./counter";
import TodosProvider, { useValues as useTodosValues } from "./todos";

const ContextProvider = ({ children }) => (
  <CounterProvider>
    <TodosProvider>{children}</TodosProvider>
  </CounterProvider>
);

export const useValues = (slice) => {
  const todos = useTodosValues(slice);
  const counter = useCounterValues(slice);
  return { ...todos, ...counter };
};

export const useActions = () => {
  const counter = useCounterActions();
  return { ...counter };
};

export default ContextProvider;