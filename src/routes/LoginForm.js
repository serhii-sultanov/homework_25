import { useContext } from "react";

import AuthContext from "../contexts/auth/AuthContext";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const schema = yup.object({
  username: yup.string().trim().required("Please, enter username").min(3),
  password: yup.string().required().min(4),
});

const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { loginUser } = useContext(AuthContext);

  const onSubmit = (credentials) => {
    loginUser(credentials);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: 675,
        margin: "50px auto",
      }}
    >
      <Typography variant="h2" color="secondary" mb={1.5}>
        Sign up for Tripma
      </Typography>
      <Typography variant="body1" color="secondary" mb={2.5}>
        Tripma is totally free to use. Sign up using your email address or phone
        number below to get started.
      </Typography>
      <Controller
        control={control}
        name="username"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Username"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Password"
            type="password"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ width: "100%" }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
