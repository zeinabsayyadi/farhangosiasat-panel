import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout";
import { useContext, useEffect } from "react";
import { ContextStore } from "../context";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";
import Posts from "../pages/Posts";
import Articles from "../pages/Posts/Articles/inex";
import CreateArticle from "../pages/Posts/Articles/CreateArticle";
import AoudioBooks from "../pages/Posts/AudioBooks/inex";
import AoudioBook from "../pages/Posts/AudioBooks/AoudioBook";
import CreateAoudioBook from "../pages/Posts/AudioBooks/CreateAoudioBook";
import Journals from "../pages/Posts/Journals/inex";
import Journal from "../pages/Posts/Journals/Journal";
import CreateJournal from "../pages/Posts/Journals/CreateJournal";
import News from "../pages/Posts/News/inex";
import OneNews from "../pages/Posts/News/OneNews";
import CreateOneNews from "../pages/Posts/News/CreateOneNews";
import Podcasts from "../pages/Posts/Podcasts/inex";
import Article from "../pages/Posts/Articles/Article";
import Podcast from "../pages/Posts/Podcasts/Podcast";
import CreatePodcast from "../pages/Posts/Podcasts/CreatePodcast";
import Videos from "../pages/Posts/Videos.js/inex";
import Video from "../pages/Posts/Videos.js/Video";
import CreateVideo from "../pages/Posts/Videos.js/CreateVideo";

const CustomRoutes = () => {
  //console.log("cookie", cookiesToken);
  let { xAccessToken } = useContext(ContextStore);

  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to={xAccessToken ? "dashboard" : "sign-in"} />,
    },
    {
      path: "dashboard",
      element: <Layout />,
      children: [
        {
          element: <Navigate to={`/dashboard/posts`} />,
          index: true,
        },
        {
          path: "account",
          element: <Account />,
        },

        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "posts/articles",
          element: <Articles />,
        },
        {
          path: "posts/articles/:article",
          element: <Article />,
        },
        {
          path: "posts/articles/create-article",
          element: <CreateArticle />,
        },
        {
          path: "posts/aoudio-books",
          element: <AoudioBooks />,
        },
        {
          path: "posts/aoudio-books/:aoudio-book",
          element: <AoudioBook />,
        },
        {
          path: "posts/aoudio-book/create-aoudio-book",
          element: <CreateAoudioBook />,
        },
        {
          path: "posts/Journals",
          element: <Journals />,
        },
        {
          path: "posts/Journals/:journal",
          element: <Journal />,
        },
        {
          path: "posts/Journals/create-journal",
          element: <CreateJournal />,
        },
        {
          path: "posts/news",
          element: <News />,
        },
        {
          path: "posts/news/:one-news",
          element: <OneNews />,
        },
        {
          path: "posts/news/create-news",
          element: <CreateOneNews />,
        },
        {
          path: "posts/podcasts",
          element: <Podcasts />,
        },
        {
          path: "posts/podcasts/:podcast",
          element: <Podcast />,
        },
        {
          path: "posts/podcasts/create-podcast",
          element: <CreatePodcast />,
        },
        {
          path: "posts/videos",
          element: <Videos />,
        },
        {
          path: "posts/videos/:video",
          element: <Video />,
        },
        {
          path: "posts/videos/create-video",
          element: <CreateVideo />,
        },
      ],
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
  ]);
  return routes;
};

export default CustomRoutes;
