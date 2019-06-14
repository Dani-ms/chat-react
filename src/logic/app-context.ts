import React from 'react'

export const appInitialState = {
  session: {
    isLoading: false,
    token: undefined
  }
}
export const AppContext = React.createContext(appInitialState)