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
import moment from "moment";


const style = {
    margin: "3.5% 2.5%"
}


class DataTab extends React.Component {
    state = {
        searches: [],
        users: []
    }

    componentWillMount(){
        this.getSearches();
    }

    getSearches(){
        API.getSearches().then(res => {
            this.setState({
                searches: res.data 
            });
        });
    }


    render(){

        this.state.searches.map((element, index) => element.users.map((user,index) => console.log("Hey " + user.length)))
        return (
            <MuiThemeProvider>
                <Grid style={style}>
                 {this.state.searches.map((search, index) => (
                     < SearchCard key = {
                         index
                     }
                     title = {
                         search.title
                     }
                     subtitle = {
                         moment(search.date).format("MMMM Do YYYY, h:mm A")
                     }
                     total = {
                         search.total
                     }
                     all={search.users}
                     />
                ))}  
                </Grid>  
            </MuiThemeProvider>
        )
    }
}

export default DataTab;
