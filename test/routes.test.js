const chai = require("chai"),
  chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../server.js").app;


chai.use(chaiHttp);


describe("Routes to home", () =>{
    it("should give us the homepage", ()=> {
        chai.request(app)
        .get("/api/users")
        .end((res)=> {
             expect(res).to.have.status(200);
        })
    })
})