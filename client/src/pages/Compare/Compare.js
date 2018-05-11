import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import API from "../../utils/API";

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
class Compare extends Component {
    constructor(){
        super();
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
            searches: [],
            selected: []
        }
         this._onRowSelection = this._onRowSelection.bind(this);
    }

  handleToggle = (event, toggled) => {
      console.log("Here is what happened: " + event)
    this.setState({
      [event.target.name]: toggled,
    });
  };

  _onRowSelection(key) {
      console.log(key, this.state.searches[key])
  }



  handleChange = (event) => {
      console.log("Here is what happened: " + event.target.value)
    this.setState({height: event.target.value});
  };

  componentWillMount(){
      this.getSearches();
  }

    getSearches() {
          API.getSearches().then(res => {
              console.log(res.data)
              this.setState({
                  searches: res.data
              });
          });
      }

  render() {
    return (


        <MuiThemeProvider>
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection = {
              this._onRowSelection
          } >
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="ID" style={{width:"10px"}}>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Title of Search</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="Number of users">Total</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.searches.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.title}</TableRowColumn>
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.total}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Compare;