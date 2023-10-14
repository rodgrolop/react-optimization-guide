import { useEffect, useState, type ChangeEvent } from "preact/compat";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import { useLogin, type loginInputProps } from "@api";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";

import type { VNode } from "preact";

import { styles } from "./styles";

const LoginForm = (): VNode => {
  const { mutate, error, isLoading } = useLogin();
  const [inputErrors, setInputErrors] = useState<boolean>(false);

  const [formState, setFormState] = useState<loginInputProps>({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = (): void => setShowPassword((show) => !show);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputErrors(false);
    const { name, value } = event.target as HTMLInputElement;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = () => {
    mutate(formState);
  };

  useEffect(() => {
    setInputErrors(Boolean(error));
  }, [error]);

  return (
    <>
      <Typography variant="h2" gutterBottom component="div">
        Login
      </Typography>
      <Grid xs={10} sx={styles.inputGrid}>
        <FormControl variant="outlined" fullWidth={true} color="secondary">
          <InputLabel htmlFor="outlined-adornment-user">
            Email/Username
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-user"
            name="identifier"
            error={inputErrors}
            onChange={onChange}
            value={formState.identifier}
            label={"Email/Username"}
          />
        </FormControl>
      </Grid>
      <Grid xs={10} sx={styles.inputGrid}>
        <FormControl variant="outlined" fullWidth={true} color="secondary">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            error={inputErrors}
            onChange={onChange}
            value={formState.password}
            label={"Password"}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid sx={{ height: "52px" }}>
        {isLoading ? (
          <CircularProgress color="secondary" size={30} />
        ) : (
          <Button
            onClick={onSubmit}
            variant="contained"
            color="secondary"
            endIcon={<SendIcon style={{ width: "1rem", height: "1rem" }} />}
          >
            Login
          </Button>
        )}
      </Grid>
    </>
  );
};
export default LoginForm;