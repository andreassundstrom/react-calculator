import { Button } from "@mui/material"
import { useContext } from "react"
import AppContext from "../AppContext"

type props = {
  value: string
}
export default function CalculatorButton({value}:props){
  const { setCommands } = useContext(AppContext)
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) {
    setCommands(value)
  }

  return(
    <Button sx={{height:50}} disabled={value === ""} fullWidth onClick={handleClick} variant={'outlined'}> { value } </Button>
  )
}