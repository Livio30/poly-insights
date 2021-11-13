import React from 'react';
import { Link } from 'react-router-dom';
import {Filters} from '../Tempdata/Filter';
const FilterComp=({img,index,name,Filter})=>{
    return(
        <>
      
        <div className="party" onClick={()=>Filter(index)}>
             <img src={img} className="img-fluid" ></img>
             <div>
                 <h4 className="text-center">{name}</h4>
             </div>
        </div>
        </>
    )
}

export default FilterComp;