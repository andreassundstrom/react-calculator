import { useContext } from "react"
import AppContext from "../AppContext"
import Typography from "@mui/material/Typography"

export default function DebugHeader() {
  const { commands } = useContext(AppContext)
  return (
    <Typography textAlign={'right'} variant="h4">&nbsp;{ commands.join(' ') }</Typography>
  )
}