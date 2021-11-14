import {ALL_BLOGS_FAIL, ALL_BLOGS_REQUEST, ALL_BLOGS_SUCCESS} from "../constants/Blogloadingconstants";

export const AllBlogsReducer=(state={AllTheBlogs:[],loading:true},action)=>{
    switch(action.type){
        case ALL_BLOGS_REQUEST:
            return {loading:true};
        case ALL_BLOGS_SUCCESS:
            return {loading:false,AllTheBlogs:action.payload}  
        case ALL_BLOGS_FAIL:
            return {loading:false,error1:action.payload}
        default:
            return state;          
    }
}

