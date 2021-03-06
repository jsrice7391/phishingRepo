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
  CardText
} from "material-ui/Card";
import { get } from "http";
import ResultTable from "../../components/ResultTable";
import ResultRead from "../../components/ResultRead";
import {CSVLink, CSVDownload} from "react-csv";
import PieChart from "../../data/PieChart";


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
           <CSVLink data={this.state.users}>Download</CSVLink>
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
        <div className="main">
          <Row className="show-grid">
            <Col xs={12} md={6}>
            <ResultRead date={this.state.date} username={this.state.username} users={this.state.users}/>  
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

