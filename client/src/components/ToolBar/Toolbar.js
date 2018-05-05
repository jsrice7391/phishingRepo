import React from "react";
import Toolbar, { ToolbarTitle } from "material-ui/Toolbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class ToolBar extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <Toolbar text="Phising Emails"/>
            </MuiThemeProvider>
        )
    }
}
