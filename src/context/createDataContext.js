import React, {useReducer, createContext} from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = [];

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  }

  return {Context, Provider};
};
