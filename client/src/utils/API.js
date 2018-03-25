import axios from "axios";

export default {
  // Gets all items
  getAll: function() {
    return axios.get("/api/users");
  }
};
