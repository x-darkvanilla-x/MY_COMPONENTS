import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

{
  /* 
  Requires to install there dependencies to use material ui and icons
  
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  */
}

export const RegistrationForm = () => {
  return (
    <Stack
      sx={{
        minHeight: "100svh",
        width: "100%",
        bgcolor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <Stack
          sx={{
            minWidth: 300,
            padding: "30px",
            bgcolor: "#ffffff",
            borderRadius: "5px",
          }}
          gap={3}
        >
          <Typography variant="h5">Register</Typography>
          <Typography variant="body1">
            Please fill in this form to create an account
          </Typography>

          <TextField required label="Username"></TextField>

          <TextField required label="Password" />

          <TextField required label="Repeat Password" />

          <FormControlLabel
            control={<Checkbox />}
            required
            label="Terms & Privacy."
          />

          <Button variant="contained" color="success" type="submit">
            Register
          </Button>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">Already have an account?</Typography>
            <Button>Sign in</Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
