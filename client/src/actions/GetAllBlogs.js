import {
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
} from "../constants/Blogloadingconstants";
import {
  ALL_BLOG_FAIL,
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
} from "../constants/Blogloadingconstants";
import PartyInfo from "../Tempdata/PartyInfo";
export const getAllBlogs = () => async (dispatch) => {
  dispatch({ type: ALL_BLOGS_REQUEST });
  //try {
  //   const res = await fetch("/getblog", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
    // const data = await res.json();
    // console.log(`post data:${data}`);
  
  // } catch (e) {
  //   dispatch({ type: ALL_BLOGS_FAIL, payload: e.message });
  // }
  console.log("Getting all");
  console.log(PartyInfo);
dispatch({ type: ALL_BLOGS_SUCCESS, payload: PartyInfo });
};



export const getABlog = (blogid) => async (dispatch) => {
  dispatch({ type: ALL_BLOG_REQUEST });
 // try {
  //   const res = await fetch("/getblog", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
    // const data = await res.json();
    // console.log(`post data:${data}`);
    console.log(blogid);
    PartyInfo.map((e)=>console.log(e.id))
    const Requested=PartyInfo.filter((e)=>e.id===blogid);
    console.log(Requested);
    dispatch({ type: ALL_BLOG_SUCCESS, payload: Requested[0] });
  //} catch (e) {
   // dispatch({ type: ALL_BLOG_FAIL, payload: e.message });
 // }
};
