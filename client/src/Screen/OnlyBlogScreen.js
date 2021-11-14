import React, { useEffect, useState } from "react";

import comfood from "../Images/comfood.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getABlog } from "../actions/GetAllBlogs";
import Loadingcomp from "../components/LoadingComp";

const Onlyblog = (props) => {
  const dispatch = useDispatch();
  const SingleBlog = useSelector((e) => e.SingleBlog);
  const { ABlog, loading, error } = SingleBlog;
  const AllBlogs = useSelector((e) => e.AllBlogs);
  const { AllTheBlogs, error1 } = AllBlogs;
  useEffect(() => {
    console.log(`blogs->${props.match.params.id}`);
    dispatch(getABlog(Number(props.match.params.id)));
    setTimeout(() => {
        
      //   console.log(ABlog);
      //console.log(AllTheBlogs[0])
      // AllTheBlogs.map((e)=>e.id===Number(props.match.params.id)?console.log(e):console.log("no match"))
    }, 2000);
  }, []);
  return loading?<Loadingcomp/>:(
    <>
      <div className="container userg">
        <h3 className="text text-center userdis">
          <u>All the blogs by our Blogers!</u>
        </h3>
      </div>
      <div className="container gallery mt-5 ">
        <div className="row  mx-auto d-flex justify-content-center mt-2 mb-2">
          {/* text side */}

          {/* Img side */}
          <div className="col-md-5 col-lg-5 col-12 ">
            <div className=" imgcontsp row blog colcomp" data-aos="fade-down">
              <img
                src={comfood}
                alt="selected blog"
                className="img-fluid  col-12 col-md-12 col-lg-12 "
              />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-12 ms-2">
            <h2 className="text-center">{ABlog.title}</h2>
            <h4 className="text-center"></h4>
            <p className="contsize content">
              {ABlog.content}
            </p>
            <div className="writer ">
              <strong >Category:</strong>
              <h4>
                <strong >{ABlog.category}</strong>
              </h4>
            </div>
            <div className="writer">
              <strong>Party:</strong>
              <h4>
                <strong>{ABlog.party}</strong>
              </h4>
            </div>
            <div className="writer">
              <strong>Reference:</strong>
              <h4>
                <strong>{ABlog.reference}</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onlyblog;
