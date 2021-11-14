import {ALL_BLOG_FAIL, ALL_BLOG_REQUEST, ALL_BLOG_SUCCESS} from "../constants/Blogloadingconstants";

export const ABlogReducer=(state={ABlog:{},loading:true},action)=>{
    switch(action.type){
        case ALL_BLOG_REQUEST:
            return {loading:true};
        case ALL_BLOG_SUCCESS:
              console.log(action.payload);
              console.log("inn")
            return {loading:false,ABlog:action.payload}  
        case ALL_BLOG_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;          
    }
}
