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
import { useContext, useEffect } from "react";
import { ContextStore } from "../../context";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../api/admin";

const SignInForm = () => {
  const { setUser, setXAcessToken, xAccessToken } = useContext(ContextStore);
  const navigation = useNavigate();
  const theme = useTheme();
  const classes = Style(theme);

  useEffect(() => {
    if (xAccessToken?.length > 2) {
      console.log(xAccessToken);
      navigation("/");
    }
  }, [xAccessToken]);

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required("ورود شماره تلفن الزامی است")
      .min(11, "شماره تلفن همراه شما باید 11 عدد داشته باشد"),
    password: yup
      .string()
      .required("وارد کردن رمز عبور الزامی است")
      .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
  });

  const handleSubmitForm = (values) => {
    loginAdmin({
      address: "api/retrict/login",
      body: {
        phone: values?.phone,
        password: values?.password,
      },
    })
      .then((res) => {
        if (res?.data?.success === true && res?.data?.data) {
          console.log(res.data.data);
          return res.data.data;
        }
      })
      .then((res) => {
        setUser(res?.user);
        setXAcessToken(res?.xAccessToken);
      })
      .catch((err) => {
        console.log("login err", err);
      });
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
