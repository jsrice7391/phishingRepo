import axios from "axios";
import moment from "moment";


export default {
  // Gets all items
  getAll: function() {
    return axios.get("/api/users");
  },

  getSearches: () =>{
    return axios.get("/api/searches")
  },
  search: (query) =>{
    return axios.get("/api/users/search", {
      params:{
        search: query.search,
        searchParam: query.searchParam,
        date: moment(Date.now()).format()
      }
    })
  }
};
