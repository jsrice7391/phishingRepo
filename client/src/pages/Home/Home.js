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
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import { get } from "http";




class Home extends Component {
  state = {
    date: moment(Date.now()).format("MMM Do hh:mm"),
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
          <RaisedButton label="Generate CSV" />
          <RaisedButton label="Clear" onClick={() => this.getAll()} />
        </div>
      );
    } else {
      return (
        <div className="padder">
          <Row>
            <Col md={12} xs={12}>
              <Textfield
                floatingLabelText="Search"
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
              />
              <DropDownMenu
                name="searchKey"
                value={this.state.searchKey}
                onChange={this.handleChange}
              >
                <MenuItem value={"user_from"} primaryText="From" />
                <MenuItem value={"user_to"} primaryText="To" />
                {/* <MenuItem value={"subject"} primaryText="Subject" /> */}
                <MenuItem value={"location"} primaryText="Location" />
              </DropDownMenu>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <DatePicker
                name="startDate"
                autoOk={true}
                floatingLabelText="startDate"
                onChange={(x, event) => {
                  console.log(event);
                }}
              />
              <DatePicker
                name="startDate"
                autoOk={true}
                floatingLabelText="startDate"
                onChange={(x, event) => {
                  console.log(event);
                }}
              />
              <RaisedButton label="Search" onClick={() => this.searchAll()} />
            </Col>
          </Row>
        </div>
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Phishing Email" />
          </ToolbarGroup>
        </Toolbar>
        <div className="main">
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Card>
                <CardTitle title="Summary" subtitle={this.state.date} />
                <Row>
                  <Col md={4} sm={6} xs={12}>
                    <CardText>User Count</CardText>
                    <CardTitle
                      className="highlight"
                      title={this.state.users.length}
                    />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText>Testing code</CardText>
                    <CardTitle
                      className="highlight"
                      title={this.state.username}
                    />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText>Testing code</CardText>
                    <CardTitle
                      className="highlight"
                      title={this.state.username}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTitle title="Generate Report" subtitle={this.state.date} />
                {this.renderSearchedLogic()}
              </Card>
            </Col>
          </Row>
          <br />
          <Card>
            <Tabs className="tab-color" value={this.state.value} onChange={this.handleChange}>
              <Tab label="Tab A" value="a">
                <Table
                  height="300px"
                  fixedHeader={true}
                  fixedFooter={true}
                  selectable={true}
                  multiSelectable={true}
                >
                  <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                  >
                    <TableRow>
                      <TableHeaderColumn
                        colSpan="3"
                        tooltip="Super Header"
                        style={{ textAlign: "center" }}
                      >
                        {" "}
                        Phishing Emaillist
                      </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                      <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        {""}
                        To
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        From
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        Subject
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        Read
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        Location
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        Date
                      </TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={false}
                  >
                    {this.state.users.length ? (
                      this.state.users.map((row, index) => (
                        <TableRow key={index}>
                          <TableRowColumn>{index}</TableRowColumn>
                          <TableRowColumn>{row.user_from}</TableRowColumn>
                          <TableRowColumn>{row.user_to}</TableRowColumn>
                          <TableRowColumn>{row.location}</TableRowColumn>
                          <TableRowColumn>{row.read_stat}</TableRowColumn>
                          <TableRowColumn>{row.location}</TableRowColumn>
                          <TableRowColumn>{row.completed}</TableRowColumn>
                        </TableRow>
                      ))
                    ) : (
                      <h2>No Results Found</h2>
                    )}
                  </TableBody>
                </Table>
              </Tab>
              <Tab label="Tab B" value="b">
                    <DataTab />
            
              </Tab>
            </Tabs>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;

