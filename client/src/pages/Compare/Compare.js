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
            selectedRows:[],
            first: null,
            second: null
        }
      this._onRowSelection = this._onRowSelection.bind(this);
    }

  _onRowSelection(rows) {
    this.state.first === null ? this.setState({first: this.state.searches[rows]}) : this.setState({second: this.state.searches[rows]})
     this.setState({
         selectedRows: [...this.state.selectedRows, this.state.searches[rows]]
       },
       () => {
         this.tableBody.setState({
           selectedRows: rows
         });
       }
     );
  }



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
    let {selectedRows, searches, first, second} = this.state
    return (
      <MuiThemeProvider>
      <div>
      <Table multiSelectable onRowSelection={this._onRowSelection}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>c1</TableHeaderColumn>
                <TableHeaderColumn>c2</TableHeaderColumn>
                <TableHeaderColumn>c3</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody showRowHover ref={(tableBody) => { this.tableBody = tableBody; }}>
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

     {first !== null ? <div><h3>{first.title}</h3></div> : <div><h3>Please select a second</h3></div>}

      {second !== null ? <div><h3>{second.title}</h3></div> : <div><h3>Please select a second</h3></div>}


      </MuiThemeProvider>
    );
  }
}

export default Compare;