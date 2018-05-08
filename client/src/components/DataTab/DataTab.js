import React from "react";
import {
    MuiThemeProvider
} from "material-ui/styles";
import API from "../../utils/API";


class DataTab extends React.Component {
    state = {
        searches: []
    }

    componentWillMount(){
        this.getSearches();
    }

    getSearches(){
        API.getSearches().then(res => {
            console.log(res);
            this.setState({
                searches: res.data     
            });
        });
    }


    render(){
        return (
            <MuiThemeProvider>
                    <h1> Here is the Data Tab </h1>
            </MuiThemeProvider>
        )
    }
}

export default DataTab;
