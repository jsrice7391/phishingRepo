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


const SearchCard  = (props) => {

    const theUsers = props.all[0];
    const unread = theUsers.filter(user => user.read_stat === 0).length;
    const read = theUsers.filter(user => user.read_stat !== 0).length;
    console.log(`The amount of read: ${read} The amount of unread: ${unread}`)

   

       return  <Col md={6}>
          <Card>
            <CardHeader
              title={props.title}
              subtitle={props.subtitle}
              actAsExpander={true}
              showExpandableButton={true}
            />       
            <CardActions>
            </CardActions>
            <CardText expandable={true}>
                There were this many users:
                {_.uniq(theUsers).map((element, index) => (
                  <div>
                  <p>{element.user_from}</p>
                  <p>{element.read_stat == 1 ? "true" : "false"}</p>
                  </div>
                ))}
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
