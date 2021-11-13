import React from 'react';
import { Link } from 'react-router-dom';
const PartyComp=({img,name})=>{
    return(
        <>
        <Link className="party" to={`/getmoreonparty/${name}`}>
             <img src={img} className="img-fluid"></img>
             <div>
                 <h4 className="text-center">{name}</h4>
             </div>
        </Link>
        </>
    )
}

export default PartyComp;