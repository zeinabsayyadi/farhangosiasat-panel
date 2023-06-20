// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "پست ها",
    key: "posts",
    path: "/dashboard/posts",
    icon: icon("ic_analytics"),
  },
  {
    title: "مقالات",
    key: "articles",
    path: "/dashboard/posts/articles",
    icon: icon("ic_user"),
  },
  {
    title: "کتاب های صوتی",
    key: "aoudio-books",
    path: "/dashboard/posts/aoudio-books",
    icon: icon("ic_cart"),
  },
  {
    title: "نشریات",
    key: "journals",
    path: "/dashboard/posts/journals",
    icon: icon("ic_blog"),
  },
  {
    title: "تازه ها",
    key: "news",
    path: "/dashboard/posts/news",
    icon: icon("ic_lock"),
  },
  {
    title: "پادکست ها",
    key: "podcasts",
    path: "/dashboard/posts/podcasts",
    icon: icon("ic_lock"),
  },
  {
    title: "ویدئو ها",
    key: "videos",
    path: "/dashboard/posts/videos",
    icon: icon("ic_lock"),
  },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default navConfig;
