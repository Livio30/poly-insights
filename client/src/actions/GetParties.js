
import {GET_PARTIES_FAIL, GET_PARTIES_REQUEST, GET_PARTIES_SUCCESS} from "../constants/PartyConstants";
import partynames from "../Tempdata/partynames";  
  export const getparties = () => async (dispatch) => {
    dispatch({ type: GET_PARTIES_REQUEST });
    try {
      const res = await fetch("/api/party-list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(`post data:${data.PartyList}`);
  // console.log("Sending ");
  // console.log(partynames);
      dispatch({ type: GET_PARTIES_SUCCESS, payload: data.PartyList });
    } catch (e) {
      dispatch({ type: GET_PARTIES_FAIL, payload: e.message });
    }
  };