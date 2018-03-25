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
    date: moment(Date.now()).format("MMM Do"),
    users: [],
    username: "Jus",
    searched: false,
    search: ""
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  searchAll = parameter => {
    API.search({subject:this.state.search}).then(results =>{
      this.setState({
        users: results
      })
    })

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentWillMount(){
    this.getAll();
  }

  getAll = () =>{
    API.getAll().then(res =>{
      this.setState({users:res.data});
    })
  };

  render() {
    return <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Phishing Email" />
          </ToolbarGroup>
          <ToolbarGroup>
            <SearchBar value={this.state.search} onChange={value => this.searchAll(value)} onRequestSearch={() => console.log("onRequestSearch")} style={{ margin: "0 auto", maxWidth: 800 }} />
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
                    <CardTitle className="highlight" title={this.state.users.length} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText>Testing code</CardText>
                    <CardTitle className="highlight" title={this.state.username} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText>Testing code</CardText>
                    <CardTitle className="highlight" title={this.state.username} />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTitle title="Generate Report" subtitle={this.state.date} />
                <Row>
                  <Col md={6} xs={12} />
                </Row>
              </Card>
            </Col>
          </Row>
          <br />

          <Card>
            <Table height="300px" fixedHeader={true} fixedFooter={true} selectable={true} multiSelectable={true}>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                <TableRow>
                  <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{ textAlign: "center" }}>
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
              <TableBody displayRowCheckbox={false} deselectOnClickaway={true} showRowHover={true} stripedRows={false}>
              {this.state.users.length ? 
                this.state.users.map((row, index) => <TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.user_from}</TableRowColumn>
                    <TableRowColumn>{row.user_to}</TableRowColumn>
                    <TableRowColumn>{row.location}</TableRowColumn>
                    <TableRowColumn>{row.read_stat}</TableRowColumn>
                    <TableRowColumn>{row.location}</TableRowColumn>
                    <TableRowColumn>{row.completed}</TableRowColumn>
                  </TableRow>)
                : <h2>No Results Found</h2> }  
              </TableBody>
            </Table>
          </Card>
        </div>
      </MuiThemeProvider>;
  }
}

export default Home;

