import React, {createContext, ReactNode, useReducer} from 'react';

interface IAuthProvider {
  children: ReactNode;
}

export const DataContext = (reducer: any, actions: any, defaultValue: any) => {
  const Context = createContext({});

  const Provider = ({children}: IAuthProvider) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActions: any = {};
    console.log(typeof boundActions);
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
