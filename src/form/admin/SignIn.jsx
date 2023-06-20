import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import {
  Box,
  ButtonBase,
  CssBaseline,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import { Style } from "../formStyle";
import { useFormik } from "formik";
import { useContext } from "react";
import { ContextStore } from "../../context";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const SignInForm = () => {
  const { setUser } = useContext(ContextStore);
  const theme = useTheme();
  const classes = Style(theme);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    phone: yup
      .number()
      .required("ورود شماره تلفن الزامی است")
      .min(11, "شماره تلفن همراه شما باید 11 عدد داشته باشد"),
    password: yup
      .string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
  });

  const handleSubmitForm = (values) => {
    //  axios
    //    .post(admin_login, {
    //      payload: values.phone,
    //      password: values.password,
    //    })
    //    .then((res) => {
    //      console.log(res.data);
    //      if (res.data) {
    //        const userInfo = {
    //          type: "admin",
    //          token: res.data.data,
    //          access_key: "",
    //          license_key: "",
    //        };
    //        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    //        dispatch(sign(userInfo));
    //        navigation("/");
    //      }
    //    })
    //    .catch((err) => {
    //      console.log("login err", err);
    //    });
    console.log(values);
    const user = {
      token: "@$validToken22",
      type: "admin",
      role: "ادمین",
      name: "محمد حمیدیان",
      phone: values.phone,
      password: values.password,
      id: values.phone,
      photo: "/assets/images/avatars/avatar_default.jpg",
    };
    setUser(user);
    Cookies.set("user", JSON.stringify(user));
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: handleSubmitForm,
    validationSchema: schema,
  });
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={classes.formBox}>
        <CssBaseline />
        <Paper
          elevation={3}
          sx={classes.formPaper}
        >
          <Typography
            variant="h6"
            color={theme.palette.text.primary.main}
          >
            ورود به حساب کاربری
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            style={classes.form}
          >
            <TextField
              id="phone"
              name="phone"
              label="شماره تلفن"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              sx={classes.inputField}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="رمز عبور"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={classes.inputField}
            />
            <ButtonBase
              sx={classes.formButton}
              type="submit"
            >
              ورود
            </ButtonBase>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignInForm;
