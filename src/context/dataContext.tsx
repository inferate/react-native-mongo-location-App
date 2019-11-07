import React, {createContext, ReactNode, useReducer} from 'react';

interface IAuthProvider {
  children: ReactNode;
}

interface IOptionsProvider {
  reducer: React.Reducer<{}, {}>;
  actions: any;
  defaultValue: object;
}
export const DataContext = (reducer: any, actions: any, defaultValue: any) => {
  const Context = createContext({});

  const Provider = ({children}: IAuthProvider) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
