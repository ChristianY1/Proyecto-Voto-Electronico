import { Box, Button, Card, Grid, TextField } from "@mui/material";

export default function Login(props) {
  return (
    <Grid container justifyContent="center">
      <Card sx={{ margin: 8, width: "650PX" }}>
        <Grid container sx={{ margin: 2 }} alignItems="flex-end" spacing={2}>
          <Grid item xs={6} sm={4} md={4}>
            <Grid container marginTop={2}>
              Nombres y Apellidos:
            </Grid>
          </Grid>

          <Grid item xs={6} sm={8} md={8}>
            <TextField
              sx={{
                width: "90%",
                "& .MuiInputBase-input": {
                  height: "10px" , // Altura del campo input
                },
              }}
            />
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <Grid container marginTop={2}>
              Número de Cédula:
            </Grid>
          </Grid>

          <Grid item xs={6} sm={8} md={8}>
            <TextField
             sx={{
                width: "90%",
                "& .MuiInputBase-input": {
                  height: "10px" , // Altura del campo input
                },
              }}
            />
          </Grid>

          <Grid container justifyContent="center" margin={2}>
            <Button variant="contained">Iniciar Sesión</Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
