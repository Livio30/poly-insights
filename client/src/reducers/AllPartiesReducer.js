
import {GET_PARTIES_FAIL, GET_PARTIES_REQUEST, GET_PARTIES_SUCCESS} from "../constants/PartyConstants";

export const AllPartiesReducer=(state={AllThePartiess:[],ploading:true},action)=>{
    switch(action.type){
        case GET_PARTIES_REQUEST:
            return {ploading:true};
        case GET_PARTIES_SUCCESS:
            console.log(`action is ${action.payload}`)
            return {ploading:false,AllThePartiess:action.payload}  
        case GET_PARTIES_FAIL:
            return {ploading:false,error:action.payload}
        default:
            return state;          
    }
}