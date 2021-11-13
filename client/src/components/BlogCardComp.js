import React from 'react';
import {Link} from "react-router-dom";
const BlogCardComp=({name,img,content,id})=>{
    return(
        <>
   <Link className="col-10 col-md-3 col-lg-3 blogcard" to={`/onlyblog/${id}`}>
          <img src={img} className="img-fluid"></img>
          <div>
            <h4 className="text-center">{name}</h4>
            <p className="content">
              {content.slice(0,185)}.....
            </p>
          </div>
        </Link>
        </>
    )
}

export default BlogCardComp;