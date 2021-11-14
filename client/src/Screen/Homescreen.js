import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBlogs} from "../actions/GetAllBlogs";
import {getparties} from "../actions/GetParties";
import BlogCardComp from "../components/BlogCardComp";
import Loadingcomp from "../components/LoadingComp";
import PartyComp from "../components/PartyComp";
import comfood from "../Images/comfood.jpg";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const AllBlogs = useSelector((e) => e.AllBlogs);
  const { loading, AllTheBlogs, error1 } = AllBlogs;
  const AllParties = useSelector((e) => e.AllParties);
  const { ploading, AllThePartiess, error } = AllParties;
  useEffect(()=>{
      console.log("dispatched");
  dispatch(getAllBlogs());
  dispatch(getparties());
  },[])
  return ploading ? (
    <Loadingcomp/>
  ) : (
    <>
      <div className="row">
        <div className="header">
          <h1 className="text-center">
            Your complete guide to political parties
          </h1>
          <h6 className="text-center">
            Getting to you more about political parties
          </h6>
        </div>
      </div>
      <div className="row blogcontainer mx-auto mt-5">
        <div className=" topic">
          <p>Parties Contesting for 2021</p>
        </div>
      </div>
      <div className="container partynames">
        {AllThePartiess.map((e) => {
          return <PartyComp
          key={Math.random()*Math.random()}
          img={e.img} name={e.name} />;
        })}
        {/* <div className="party">
             <img src={comfood} className="img-fluid"></img>
             <div>
                 <h4 className="text-center">Name</h4>
             </div>
        </div>
        <div className="party">
        <img src={comfood} className="img-fluid"></img>
             <div>
                 <h4 className="text-center">Name</h4>
             </div>
        </div>
        <div className="party">
        <img src={comfood} className="img-fluid"></img>
             <div>
                 <h4 className="text-center">Name</h4>
             </div>
        </div>
        <div className="party">
        <img src={comfood} className="img-fluid"></img>
             <div>
                 <h4 className="text-center">Name</h4>
             </div>
        </div> */}
      </div>

      <div className="row blogcontainer mx-auto mt-5">
        <div className=" topic">
          <p>Most useful content</p>
        </div>
        {
            AllTheBlogs.map((e,i)=>{
               
               return <BlogCardComp
                        key={Math.random()*Math.random()}
                        name={e.title}
                        img={e.img}
                        content={e.content}
                        id={e.id}
                />
            })
        }
    
   
        
      </div>
    </>
  );
};

export default HomeScreen;
