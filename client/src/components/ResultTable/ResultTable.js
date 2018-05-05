import React from "react";
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import Toolbar, {
    ToolbarTitle
} from "material-ui/Toolbar";
import { MuiThemeProvider } from "material-ui/styles";
import MdCheckCircle from "react-icons/lib/md/check-circle";


class ResultTable extends React.Component{
    render(){
        return (
            <MuiThemeProvider>
             <Toolbar style={{ backgroundColor: "#E8EFFB" }}>
                  <ToolbarTitle text="Most Recent" />
                </Toolbar>
                <Table height="400px" fixedHeader={true} fixedFooter={true} selectable={true} multiSelectable={true}>
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn tooltip="The ID">
                        ID
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Receiver">
                        {""}
                        Receiver
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Name of Sender">
                        Sender
                      </TableHeaderColumn>
                      <TableHeaderColumn tooltip="Subject of email">
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
                    {this.props.results.length ? this.props.results.map(
                        (row, index) => (
                          <TableRow key={index}>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{row.user_from}</TableRowColumn>
                            <TableRowColumn>{row.user_to}</TableRowColumn>
                            <TableRowColumn>{row.location}</TableRowColumn>
                            <TableRowColumn>{row.read_stat == true ? <MdCheckCircle/> : null}</TableRowColumn>
                            <TableRowColumn>{row.location}</TableRowColumn>
                            <TableRowColumn>{row.completed}</TableRowColumn>
                          </TableRow>
                        )
                      ) : <h2>No Results Found</h2>}
                  </TableBody>
                </Table>
            </MuiThemeProvider>

        )
    }
}


export default ResultTable;


