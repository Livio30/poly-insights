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
  try {
    const res = await fetch("/api/party-list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(`post data:${data}`);
    dispatch({ type: ALL_BLOGS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ALL_BLOGS_FAIL, payload: e.message });
  }
  // console.log("Getting all");
  // console.log(PartyInfo);
};



export const getABlog = (blogid) => async (dispatch) => {
  dispatch({ type: ALL_BLOG_REQUEST });
 try {
    const res = await fetch(`/api/post/${blogid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(`post data:${data}`);
    dispatch({ type: ALL_BLOG_SUCCESS, payload: data });
  } catch (e) {
   dispatch({ type: ALL_BLOG_FAIL, payload: e.message });
 }
};
