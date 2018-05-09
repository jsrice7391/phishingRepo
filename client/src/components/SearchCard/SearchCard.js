import React from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import _ from "underscore";
import PieChart from "../../data/PieChart";
import Table from "../BootstrapTable";


const SearchCard  = (props) => {

    const theUsers = props.all[0];
    theUsers.map((user, index) => console.log(user))
    const unread = theUsers.filter(user => user.read_stat == 0).length;
    const read = theUsers.filter(user => user.read_stat !== 0 ).length;
    console.log(`The amount of read: ${read} The amount of unread: ${unread}`)

   

       return  <Col md={6}>
          <Card>
            <CardHeader
              title={props.title}
              subtitle={props.subtitle}
              actAsExpander = {theUsers.length > 0 ? true : false}
              showExpandableButton = {theUsers.length > 0 ? true : false}
            />       
            <CardActions>
            </CardActions>
            <CardText expandable={true}>
                <div style={{height: "120px"}}>
                <PieChart read = {read}
                unread = {unread}
                />
                </div>

           </CardText>
          </Card>
    </Col>

}

export default SearchCard;
