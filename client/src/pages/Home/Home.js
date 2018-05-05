import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Toolbar, { ToolbarTitle } from "material-ui/Toolbar";
import { ToolbarGroup } from "material-ui/Toolbar";
import { FontIcon } from "material-ui";
import API from "../../utils/API";
import {Grid, Row, Col} from "react-bootstrap";
import "./home.css";
import SearchBar from "material-ui-search-bar";
import moment from "moment";
import RaisedButton from "material-ui/RaisedButton";
import Textfield from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import DatePicker from "material-ui/DatePicker";
import {Tabs, Tab} from "material-ui/Tabs";
import DataTab from "../../components/DataTab"
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import { get } from "http";
import ResultTable from "../../components/ResultTable";







class Home extends Component {
  state = { 
    date: moment(Date.now()).format("MMM Do hh:mm A"),
    users: [],
    username: "Jus",
    searched: false,
    search: "",
    searchKey: "user_from"
  };

  searchAll = parameter => {
    API.search({
      search: this.state.search,
      searchParam: this.state.searchKey
    }).then(results => {
      this.setState({
        users: results.data,
        search: "",
        searched: true
      });
    });
  };

  handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = (event, index, value) => {
    console.log("Here is the value " + value)
    this.setState({ searchKey: value });
  }

  componentWillMount() {
    this.getAll();
  }

  getAll = () => {
    API.getAll().then(res => {
      this.setState({ users: res.data, searched: false });
    });
  };

  renderSearchedLogic() {
    if (this.state.searched) {
      return (
        <div className="padder">
          <RaisedButton className="separateButton" label="Generate CSV" />
          <RaisedButton label="Clear" onClick={() => this.getAll()} />
        </div>
      );
    } else {
      return <div className="padder">
          <Row>
            <Col md={12} xs={12}>
              <Textfield floatingLabelText="Search" value={this.state.search} name="search" onChange={this.handleInputChange} />
              <DropDownMenu name="searchKey" value={this.state.searchKey} onChange={this.handleChange}>
                <MenuItem value={"user_from"} primaryText="Receiver" />
                <MenuItem value={"user_to"} primaryText="Sender" />
                {/* <MenuItem value={"subject"} primaryText="Subject" /> */}
                <MenuItem value={"location"} primaryText="Subject" />
              </DropDownMenu>
              <RaisedButton label="Search" onClick={() => this.searchAll()} />
            </Col>
          </Row>
        </div>;
    }
  }

  render() {
    return (<MuiThemeProvider>
        <Toolbar style={{ backgroundColor: "white" }}>
          <ToolbarGroup>
            <ToolbarTitle text="Phishing Email" />
          </ToolbarGroup>
        </Toolbar>
        <div className="main">
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Card>
                <CardText>Report Scan as of {this.state.date} </CardText>
                <Row>
                  <Col md={4} sm={6} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={this.state.users.length} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={this.state.username} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={this.state.username} />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardText>Search</CardText>
                {this.renderSearchedLogic()}
              </Card>
            </Col>
          </Row>
          <br />
          <Card>
            <Tabs style={{ backgroundColor: "white " }} inkBarStyle={{ backgroundColor: "grey" }} value={this.state.value} onChange={this.handleChange}>
              <Tab style={{ backgroundColor: "white ", color: "black" }} label="Search" value="a">
              <ResultTable results={this.state.users}/>
    
      
              
               
              </Tab>
              <Tab style={{ backgroundColor: "white ", color: "black" }} label="Past Searches" value="b">
                <DataTab />
              </Tab>
            </Tabs>
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Home;

