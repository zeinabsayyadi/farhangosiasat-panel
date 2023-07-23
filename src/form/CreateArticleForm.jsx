import {
  Box,
  ButtonBase,
  Chip,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState } from "react";
import { postArticle as PostArticle_api } from "../api/admin";
import theme from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { ContextStore } from "../context";
import { Style } from "./formStyle";

//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const articleThemes = [
  "فرهنگی",
  "سیاسی",
  "اقتصادی",
  "اجتماعی",
  "هنری",
  "زنان",
  "محیط زیست",
];
// const FileUpload = ({ fileRef, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor="files">Choose files</label>{" "}
//       <input
//         ref={fileRef}
//         multiple={true}
//         type="file"
//         {...field}
//       />
//       {meta.touched && meta.error ? (
//         <div style={{ color: "red" }}>{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

function getStyles(name, ArticleTheme, theme) {
  return {
    fontWeight:
      ArticleTheme.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateArticleForm = () => {
  const { xAccessToken } = useContext(ContextStore);
  const classes = Style(theme);
  const [ArticleThemeState, setArticleThemeState] = useState([]);
  const [img, setImage] = useState("");
  const [text, setText] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setArticleThemeState(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleSubmitForm = (values) => {
    //myDispatch({ type: "backdrop_show" });
    console.log("in handlesubmit");
    return PostArticle_api(
      {
        address: "/api/restrict/dashboard/create-article",
        body: {
          title: values.title,
          subtitle: values.subtitle,
          authorName: values.authorName,
          authorSurname: values.authorSurname,
          releasedate: values.releasedate,
          theme: ArticleThemeState,
          articleImage: img,
          articleContent: text,
        },
      },
      {
        token: xAccessToken,
        contentType: "multipart/form-data",
      }
    )
      ?.then((res) => {
        console.log(res.data);
        return true;
      })
      .catch((rej) => {
        alert(rej);
        //myDispatch({ type: "backdrop_hide" });
        return false;
      });
  };

  const schema = yup.object().shape({
    title: yup.string().required("لطفا عنوان مقاله را وارد کنید"),
    subtitle: yup.string(),
    authorName: yup.string().required("لطفا نام نویسنده را وارد کنید"),
    authorSurname: yup
      .string()
      .required("لطفا نام خانوادگی نویسنده را وارد کنید"),
    //articleTheme: yup.array(),
    releasedate: yup.date().required("تاریخ انشتار مقاله را وارد کنید"),
    // files: yup
    //   .mixed()
    //   .test("is-file-too-big", "File exceeds 10MB", () => {
    //     let valid = true;
    //     const files = fileRef?.current?.files;
    //     if (files) {
    //       const fileArr = Array.from(files);
    //       fileArr.forEach((file) => {
    //         const size = file.size / 1024 / 1024;
    //         if (size > 10) {
    //           valid = false;
    //         }
    //       });
    //     }
    //     return valid;
    //   })
    //   .test("is-file-of-correct-type", "File is not of supported type", () => {
    //     let valid = true;
    //     const files = fileRef?.current?.files;
    //     if (files) {
    //       const fileArr = Array.from(files);
    //       fileArr.forEach((file) => {
    //         const type = file.type.split("/")[1];
    //         const validTypes = [
    //           "zip",
    //           "xml",
    //           "xhtml+xml",
    //           "plain",
    //           "svg+xml",
    //           "rtf",
    //           "pdf",
    //           "jpeg",
    //           "png",
    //           "jpg",
    //           "ogg",
    //           "json",
    //           "html",
    //           "gif",
    //           "csv",
    //         ];
    //         if (!validTypes.includes(type)) {
    //           valid = false;
    //         }
    //       });
    //     }
    //     return valid;
    //   }),
    //content: yup.string().required("نوشتن متن مقاله الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      authorName: "",
      authorSurname: "",
      //articleTheme: [""],
      releasedate: new Date().getFullYear(),
      //coverimage: [""],
      //files: "",
      //content: "",
    },
    onSubmit: handleSubmitForm,

    validationSchema: schema,
  });

  return (
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
          ایجاد مقاله جدید
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          style={classes.form}
        >
          <TextField
            fullWidth
            id="title"
            name="title"
            label="عنوان مقاله"
            type="string"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            sx={classes.inputField}
          />

          <TextField
            fullWidth
            id="subtitle"
            name="subtitle"
            label="زیرعنوان مقاله"
            type="string"
            value={formik.values.subtitle}
            onChange={formik.handleChange}
            error={formik.touched.subtitle && Boolean(formik.errors.subtitle)}
            helperText={formik.touched.subtitle && formik.errors.subtitle}
            sx={classes.inputField}
          />

          <TextField
            fullWidth
            id="authorName"
            name="authorName"
            label="نام نویسنده"
            type="string"
            value={formik.values.authorName}
            onChange={formik.handleChange}
            error={
              formik.touched.authorName && Boolean(formik.errors.authorName)
            }
            helperText={formik.touched.authorName && formik.errors.authorName}
            sx={classes.inputField}
          />

          <TextField
            fullWidth
            id="authorSurname"
            name="authorSurname"
            label="نام خانوداگی نویسنده"
            type="string"
            value={formik.values.authorSurname}
            onChange={formik.handleChange}
            error={
              formik.touched.authorSurname &&
              Boolean(formik.errors.authorSurname)
            }
            helperText={
              formik.touched.authorSurname && formik.errors.authorSurname
            }
            sx={classes.inputField}
          />

          <FormControl sx={classes.formControl}>
            <InputLabel
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              محور های موضوع
            </InputLabel>
            <Select
              name="articleTheme"
              multiple
              id="articleTheme"
              value={ArticleThemeState}
              label=""
              // value={selectedServices}
              onChange={handleChange}
              error={
                formik.touched.articleTheme &&
                Boolean(formik.errors.articleTheme)
              }
              input={<OutlinedInput id="select-themes" />}
              renderValue={(selected) => {
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Box>;
              }}
              sx={classes.selsectField}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "15px",
                    color: theme.palette.text.primary.main,
                    "& svg": {
                      display: "none",
                    },
                  },
                },
              }}
            >
              {articleThemes.map((articleThemeName) => (
                <MenuItem
                  key={articleThemeName}
                  value={articleThemeName}
                  style={getStyles(articleThemeName, ArticleThemeState, theme)}
                >
                  {articleThemeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider> */}
          {/* <FileUpload
            name="files"
            fileRef={fileRef}
          /> */}

          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={(e) => setImage(e.currentTarget.value)}
          />
          <input
            type="file"
            id="text"
            name="text"
            accept="pdf"
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button
            style={classes.formButton}
            type="submit"
          >
            Create
          </button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateArticleForm;
