import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Toolbar, { ToolbarTitle } from "material-ui/Toolbar";
import { ToolbarGroup } from "material-ui/Toolbar";
import { FontIcon } from "material-ui";
import {Grid, Row, Col} from "react-bootstrap";
import "./home.css"
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

const users = [
    {
        name: "Justin",
        status: false
    },
    {
        name:"Vianca",
        status: true
    }
]


class Home extends Component {
  state = {
    date: moment(Date.now()).format("MMM Do"),
    users: users,
    username: "Jus"
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  render() {
    return <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Phishing Email" />
          </ToolbarGroup>
          <ToolbarGroup>
            <FontIcon className="muidocs-icon-custom-sort" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <FontIcon className="muidocs-icon-custom-sort" />
          </ToolbarGroup>
        </Toolbar>
        <Grid>
          <br />
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Card>
                <CardTitle title="Summary" subtitle={this.state.date} />
                <p> More people</p>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTitle title="Summary" subtitle={this.state.date} />
                <Row>
                  <Col md={4} sm={6} xs={12}>
                    <CardText>Testing code</CardText>
                    <CardTitle className="highlight" title={this.state.username} />
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
          </Row>

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
                <TableHeaderColumn tooltip="The Name">
                  {" "}
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">
                  Status
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} deselectOnClickaway={true} showRowHover={true} stripedRows={false}>
              {this.state.users.map((row, index) => <TableRow key={index}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.status.toString()}</TableRowColumn>
                </TableRow>)}
            </TableBody>
          </Table>
        </Grid>
      </MuiThemeProvider>;
  }
}

export default Home;

