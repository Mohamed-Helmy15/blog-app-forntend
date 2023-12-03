"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { styles } from "../globals.css";
const Blog = (props) => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
    {
      id: 2,
      title: "Blog 2",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
    {
      id: 3,
      title: "Blog 3",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
    {
      id: 4,
      title: "Blog 4",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
    {
      id: 5,
      title: "Blog 5",
      category: "web development",
      is_paid: 1,
      employer: {
        user_id: 11,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
    {
      id: 6,
      title: "Blog 6",
      category: "web development",
      is_paid: 0,
      employer: {
        user_id: 1,
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
      section: [
        {
          id: 1,
          section_title: "the most popular problems with deployment",
          content: "the version of php in the server is too old",
          image:
            "https://th.bing.com/th/id/OIP.KH5vSxtv3pLvnTWLWhGrCwAAAA?rs=1&pid=ImgDetMain",
          blog_id: 1,
          created_at: "2023-12-02T15:28:38.000000Z",
          updated_at: "2023-12-02T15:28:38.000000Z",
        },
      ],
    },
  ];

  const [blog, setBlog] = useState({});
  const [employer, setEmployer] = useState({});
  const [sections, setSections] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
    blogs.map((blog) => (blog.id == props.id ? setBlog(blog) : null));
    blogs.map((blog) =>
      blog.id == props.id ? setEmployer(blog.employer.user) : null
    );
    blogs.map((blog) =>
      blog.id == props.id ? setSections(blog.section) : null
    );
    // axios
    //   .get(`https://helmy-blog.000webhostapp.com/api/blogs/${props.id}`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     setBlog(res.data.data);
    //     setEmployer(res.data.data.employer.user);
    //     setSections(res.data.data.section);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="header">
        <p>{blog.category} Category</p>
        <div className="title">
          <h1>{blog.title}</h1>
          <div className="date">
            <h5>
              Established at{" "}
              <span>
                {new Date(blog.created_at).toLocaleString("default", {
                  month: "long",
                })}
              </span>{" "}
              <span>{new Date(blog.created_at).getDate()}</span>{" "}
              <span>{new Date(blog.created_at).getFullYear()}</span>
            </h5>
          </div>
        </div>
        <div className="author">
          <p>
            Created by{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {employer.name}
            </span>
          </p>
        </div>
      </div>
      <div className="content">
        {!blog.is_paid || blog.employer.user_id == user.id ? (
          sections.map((section) => {
            return (
              <div className="section" key={section.id}>
                <h1>{section.section_title}</h1>
                {section.image && (
                  <div className="image">
                    <img
                      src={section.image}
                      alt="image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}
                <p>{section.content}</p>
              </div>
            );
          })
        ) : (
          <div className="section">
            <SentimentVeryDissatisfiedIcon
              style={{
                fontSize: "100px",
                display: "block",
                margin: "10px auto",
              }}
            />
            <p
              style={{
                textAlign: "center",
              }}
            >
              We are Sorry! This Blog is not Free for normal users. please
              contact us at <strong>+201150870355</strong> or send an Email at{" "}
              <strong>mohamedhelmy1531@gmail.com</strong> to be a partner.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
