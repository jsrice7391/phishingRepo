import React from "react";
import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Link} from "react-router-dom";



const style = {
    padding: "25px 35px",
}

export default class ToolBar extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Toolbar style={{backgroundColor:"#E8E8E8"}}>
                <ToolbarGroup>
                    <ToolbarTitle text = "Phishing Emails" syle={style} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <Link to="/compare">Compare</Link>        
                </ToolbarGroup>       
               </Toolbar>          
            </MuiThemeProvider>
        )
    }
}
