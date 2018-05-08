import React from "react";
import {
    MuiThemeProvider
} from "material-ui/styles";
import SearchCard from "../SearchCard";
import API from "../../utils/API";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

const style = {
    margin: "3.5% 2.5%"
}


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
                <Grid style={style}>
                 {this.state.searches.map((search, index) => (
                     < SearchCard key={index} title={search.title} subtitle={search.date} total={search.total}/>
                ))}  
                </Grid>  
            </MuiThemeProvider>
        )
    }
}

export default DataTab;
