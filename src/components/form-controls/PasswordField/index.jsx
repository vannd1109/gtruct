import * as React from "react";
import TextField from "@mui/material/TextField";

function PasswordField(props) {
  return (
    <TextField
      id="outlined-password-input"
      label="Mật khẩu"
      type="password"
      autoComplete="current-password"
    />
  );
}

export default PasswordField;
