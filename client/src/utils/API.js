import axios from "axios";

export default {
  // Gets all items
  getAll: function() {
    return axios.get("/api/users");
  },
  search: (query) =>{
    return axios.get("/api/users/search", {
      params:{
        search: query.search
      }
    })
  }
};
