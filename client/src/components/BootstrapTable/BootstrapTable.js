import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";



class Table extends React.Component {
  render() {
    return (
      <BootstrapTable data={ this.props.users }>
        <TableHeaderColumn dataField='id' isKey>Read</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Not Read</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Table;

