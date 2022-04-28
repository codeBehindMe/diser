import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext({ apiKey: '' });

function countReducer(state: any, action: any) {
  switch (action.type) {
    case 'set': {
      return {apiKey: state.apiKey}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({children}: {children: any}) {
  const [state, dispatch] = useReducer(countReducer, { apiKey: '' })
  const value = { state, dispatch }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export { AppProvider, useAppContext }