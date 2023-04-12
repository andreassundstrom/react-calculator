import Grid from "@mui/material/Grid";
import Button from "./Button";
import Box from "@mui/material/Box";

export default function Numbers(){
  return(
    <Box>
        <Grid container>
        <Grid item xs={3}><Button value="C" /></Grid>
        <Grid item xs={3}><Button value="" /></Grid>
        <Grid item xs={3}><Button value="" /></Grid>
        <Grid item xs={3}><Button value="÷" /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><Button value="7" /></Grid>
        <Grid item xs={3}><Button value="8" /></Grid>
        <Grid item xs={3}><Button value="9" /></Grid>
        <Grid item xs={3}><Button value="×" /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><Button value="4" /></Grid>
        <Grid item xs={3}><Button value="5" /></Grid>
        <Grid item xs={3}><Button value="6" /></Grid>
        <Grid item xs={3}><Button value="−" /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><Button value="1" /></Grid>
        <Grid item xs={3}><Button value="2" /></Grid>
        <Grid item xs={3}><Button value="3" /></Grid>
        <Grid item xs={3}><Button value="+" /></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}><Button value="" /></Grid>
        <Grid item xs={3}><Button value="0" /></Grid>
        <Grid item xs={3}><Button value="." /></Grid>
        <Grid item xs={3}><Button value="=" /></Grid>
      </Grid>
  </Box>
  )
}