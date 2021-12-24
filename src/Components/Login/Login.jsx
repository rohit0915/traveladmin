import React, { useEffect, useState } from "react";
// import HOC from '../../Common/HOC'
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//import css
import "./Login.css";

//import image
// import mainLogo from "./MainLogo.png"
import mainLogo from "./MainLogo_prev_ui.png";

const Login = (props) => {
  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="Register_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          <div className="mainlogo_img">
            <img src={mainLogo} />
          </div>
          <div className="main_padding_top_bottom">
            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <TextField
                  className="mb-3"
                  placeholder="Email"
                  id="outlined-basic"
                  variant="outlined"
                  autoComplete="off"
                />

                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="inputfiledformatting mt-3">
              <Button
                variant="contained"
                className="Home_page_button login_register_width"
                onClick={() => props.history.push("/featureadd")}
              >
                Sign in
              </Button>
            </div>
          </div>
        </Card>

        <Card className="pt-2 pb-2 Card_shadow mt-2">
          <p>
            <span
              className="Login_in ml-3"
              onClick={() => props.history.push("#")}
            >
              Forgot your password
            </span>
          </p>
        </Card>
      </div>
    </>
  );
};

export default Login;
