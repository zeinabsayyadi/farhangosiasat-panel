import { useContext, useState } from "react";
import { ContextStore } from "../context";
import axios from "axios";

const TestForm = () => {
  const { xAccessToken } = useContext(ContextStore);
  const [image, setImage] = useState([""]);
  const [content, setContent] = useState("");

  const handlesubmitform = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", "blabla");
    axios.post(
      "http://192.168.1.193:8000/api/restrict/dashboard/create-article",
      {
        title: "blabla",
        subtitle: "blablasub",
        authorName: "brigjg",
        authorSurname: "ibsib",
        theme: ["زنان"],
        releasedate: new Date().getFullYear(),
        articleContent: content,
        articleImageTop: image[0],
        articleImageMiddle: image[1],
        articleImageEnd: image[2],
      },
      {
        headers: {
          "x-access-token": xAccessToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <form encType="multipart/form-data">
      <label for="img">image</label>
      <input
        type="file"
        id="img"
        name="articleImage"
        accept="image/*"
        multiple
        onChange={(e) => {
          setImage([
            e?.target?.files[0],
            e?.target?.files[1],
            e?.target?.files[2],
          ]);
        }}
      />
      <input
        type="file"
        id="content"
        name="articleContent"
        accept="application/msword,text/plain, application/pdf"
        onChange={(e) => {
          setContent(e?.target?.files[0]);
        }}
      />
      <button onClick={(e) => handlesubmitform(e)}>submit</button>
    </form>
  );
};

export default TestForm;
