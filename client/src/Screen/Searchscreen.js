import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../actions/GetAllBlogs";
import Loadingcomp from "../components/LoadingComp";

import BlogCardComp from "../components/BlogCardComp";
const SearchScreen = ({ posts }) => {
  //Getting all blogs from backend through REDUX

  const AllBlogs = useSelector((e) => e.AllBlogs);
  const { loading, AllTheBlogs, error1 } = AllBlogs;
  const [search, setsearch] = useState("");
  const [userreqposts, setuserreq] = useState(null);
  const tobottom = () => {
    window.scrollTo(500, document.body.scrollHeight);
  };

  const Searchforposts = (e) => {
    e.preventDefault();

    if (search) {
      const Require = AllTheBlogs.filter((e) => {
        return Object.values(e)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      //  const Require=products.filter((e)=>console.log(e.name.split(" ").filter((char)=>{return char!==" "})));
      console.log(Require);
      if (Require.length !== 0) {
        setuserreq(Require);
      } else {
        setuserreq(null);
        alert(`Sorry, no results for ${search}.
     Try capitalizing first character or entire word, We'll surely get back to you if we get the food you wish for!`);
        setsearch("");
      }
    } else {
      setuserreq(posts);
    }
    // console.log(userreqposts);
  };
  //Getting dispatch
  const dispatch = useDispatch();

  const ViewAll = (e) => {
    e.preventDefault();

    setuserreq(AllTheBlogs);

    // console.log(userreqposts);
  };

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <>
          <Loadingcomp></Loadingcomp>
        </>
      ) : (
        <>
          <div className=" container nobg mx-auto row d-flex justify-content-center align-items-center  mt-3">
            <div className="row d-flex flex-direction-row justify-content-space-between">
              <div className="col-12 col-md-6 col-lg-6 mx-auto">
                <button
                  className=" text-center readmore calbtn mb-2 imgbtn col-5 col-lg-3 col-md-3 "
                  onClick={tobottom}
                >
                  <p className="allbtn">Go to bottom</p>
                </button>
                <button
                  className=" text-center readmore calbtn  mb-2 imgbtn col-5 col-lg-3 col-md-3"
                  onClick={ViewAll}
                >
                  <p className="allbtn">View all blogs</p>
                </button>
              </div>
              <div className="col-12 col-md-6 col-lg-6 ">
                <div className="row d-flex flex-direction-row justify-content-space-between">
                  <input
                    type="text"
                    placeholder="Enter the food name"
                    className="col-8 col-lg-8 col-md-8 searchitem mt-3"
                    name="search"
                    value={search}
                    autoComplete="off"
                    onChange={(e) => {
                      setsearch(e.target.value);
                    }}
                  />
                  <button
                    className="text-center srchbtn readmore calbtn mx-auto mb-2 imgbtn col-3 col-lg-3 col-md-3 mt-3"
                    onClick={Searchforposts}
                  >
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="allblogcont mt-1" data-aos="zoom-in">
            <div
              className="row d-flex justify-content-center"
              data-aos="fade-left"
            >
              {userreqposts !== null
                ? userreqposts.map((blog, eleno) => {
                    return (
                      <>
                        <BlogCardComp
                          name={blog.title}
                          img={blog.img}
                          content={blog.content}
                          key={blog.id * Math.random()}
                          id={blog.id}
                        />
                      </>
                    );
                  })
                : AllTheBlogs.map((blog, eleno) => {
                    return (
                      <>
                        <BlogCardComp
                          name={blog.title}
                          img={blog.img}
                          content={blog.content}
                          key={blog.id * Math.random()}
                          id={blog.id}
                        />
                      </>
                    );
                  })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchScreen;
