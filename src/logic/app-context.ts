import React from 'react'

type AppContext = {
  session: {
    isLoading: boolean,
    token?:string,
  }
}

export const appInitialState = {
  session: {
    isLoading: false,
    token: undefined
  }
}
export const AppContext = React.createContext<AppContext>(appInitialState)
