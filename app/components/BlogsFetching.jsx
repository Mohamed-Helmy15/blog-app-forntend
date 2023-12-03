"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { styles } from "../globals.css";
import { Clear, Search } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
const BlogsFetching = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  // const [blogs, setBlogs] = useState([]);
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      category: "web development",
      is_paid: 0,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 2,
      title: "Blog 2",
      category: "web development",
      is_paid: 0,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 3,
      title: "Blog 3",
      category: "web development",
      is_paid: 1,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 4,
      title: "Blog 4",
      category: "web development",
      is_paid: 1,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 5,
      title: "Blog 5",
      category: "web development",
      is_paid: 1,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
    {
      id: 6,
      title: "Blog 6",
      category: "web development",
      is_paid: 0,
      employer: {
        user: {
          name: "Mohamed helmy",
        },
      },
      created_at: "2023-12-02T15:28:38.000000Z",
    },
  ];
  // useEffect(() => {
  //   axios
  //     .get("https://helmy-blog.000webhostapp.com/api/blogs", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       setBlogs(response.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="blogs">
      <div className="search">
        <input
          type="text"
          placeholder="Search for a blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icons">
          {search.length > 0 ? (
            <Clear
              style={{
                cursor: "pointer",
              }}
              onClick={() => setSearch("")}
            />
          ) : (
            <Search />
          )}
        </div>
      </div>
      {blogs
        .filter((blog) =>
          blog.title.toLowerCase().includes(search.trim().toLowerCase())
        )
        .map((blog) => {
          return (
            <div
              className="blog"
              key={blog.id}
              onClick={() => {
                router.push(`/blogs/${blog.id}`);
              }}
            >
              <div className="content">
                <div className="catTitle">
                  <h3>{blog.category} Category</h3>
                  <h2>{blog.title}</h2>
                </div>
                <div className="author">
                  <p>
                    Created by{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {blog.employer.user.name}
                    </span>
                  </p>
                </div>
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
              <div className="lock">
                {blog.is_paid === 1 ? (
                  <LockIcon />
                ) : (
                  <p
                    style={{
                      color: "#0dc90d",
                      fontWeight: "bold",
                    }}
                  >
                    Free
                  </p>
                )}
              </div>
            </div>
          );
        })}
      <Stack spacing={2}>
        <Pagination
          count={blogs.length / 10 <= 1 ? 1 : Math.ceil(blogs.length / 10)}
        />
      </Stack>
    </div>
  );
};

export default BlogsFetching;
