import { createContext } from "react";


export interface AppContextType {
  commands: string[]
  setCommands: any
}

const AppContext = createContext<AppContextType>(
    {
      commands: [],
      setCommands: () => {}
    }
)

export default AppContext