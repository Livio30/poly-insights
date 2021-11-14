import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCardComp from "../components/BlogCardComp";
import FilterComp from "../components/FilterComp";
import Loadingcomp from "../components/LoadingComp";
import PartyComp from "../components/PartyComp";
import { Filters } from "../Tempdata/Filter";
const OnlyPartyScreen = (props) => {
  const [party, setparty] = useState("");
  const [CurrPartyData, setCurrPartyData] = useState([]);
  const AllBlogs = useSelector((e) => e.AllBlogs);
  const { loading, AllTheBlogs, error1 } = AllBlogs;
  const [indload, setindload] = useState(true);
  const [filter, setfilter] = useState(Filters[0].type);

  const filterhandler = (index) => {
    console.log(index);
    setfilter(Filters[index].type);
  };
  useEffect(() => {
    console.log(props);
    console.log(props.match.params.name);
    setparty(props.match.params.name);
    console.log(AllTheBlogs);
    setTimeout(() => {
      setCurrPartyData(AllTheBlogs);
      console.log(AllTheBlogs);
    }, 2000);
    setTimeout(() => {
      setindload(false);
    }, 3000);
   
  }, [filter]);
  return indload ? (
    <Loadingcomp/>
  ) : (
    <>
      <div className="row text-center">
        <h1>All About {party}</h1>
      </div>
      <div className="container partynames">
        {Filters.map((e, i) => {
          return (
            <FilterComp
              key={Math.random() * Math.random()}
              img={e.img}
              index={i}
              name={e.type}
              Filter={filterhandler}
            />
          );
        })}
   
      </div>
      <div className="row blogcontainer mx-auto mt-5">
        <div className=" topic">
          <p>{filter}</p>
        </div>
      </div>
      <div className="row blogcontainer mx-auto mt-5">
        {AllTheBlogs.filter((e)=>e.category===filter && e.party===party).map((e, i) => {
          
          return (
              <>
            
            <BlogCardComp
              key={e._id}
              name={e.title}
              img={e.img}
              content={e.content}
              id={e._id}
            />
            </>
          );
        })}
      </div>
    </>
  );
};

export default OnlyPartyScreen;
