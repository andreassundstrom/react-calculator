import { useEffect, useReducer, useState } from 'react'

import AppContext from './AppContext'
import OutputHeader from './components/OutputHeader'
import Numbers from './components/Numbers'
import Box from '@mui/material/Box'
import './App.css'
import Card from '@mui/material/Card'
function mathReducer(state: string[], action: string){
  if(action === "="){
    return [eval(state.join(' ').replace('÷','/').replace('×','*'))]
  }
  if(action === "C"){
    return ['']
  }

  var newState = state.slice()
  
  if(!isNaN(action as unknown as number) || action === '.'){
    newState[newState.length - 1] += action
    return newState
  }
  else{
    newState.push(action)
    newState.push('')
    return newState
  }
  
}

function App() {
  const [commands, setCommands] = useReducer(mathReducer, JSON.parse(localStorage.getItem("calculator") as string) as string[] ?? [''])
  
  useEffect(() => {
    localStorage.setItem("calculator",JSON.stringify(commands))
  }, [commands])
  
  return (
    <AppContext.Provider value={{
        commands: commands,
        setCommands: setCommands
      }}>
        
        <Box height={'100%'} justifyContent={'center'} alignItems={'center'} display='flex'>
          <Card sx={{maxWidth:600, p:2}} elevation={5}>
          <OutputHeader />
          <Numbers />
          </Card>
        </Box>
    </AppContext.Provider>
  )
}

export default App
