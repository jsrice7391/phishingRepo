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
    console.log("Here is the array: " + JSON.stringify(theUsers))

       return  <Col md={6}>
          <Card>
            <CardHeader
              title={props.title}
              subtitle={props.subtitle}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <div style={{height: "100px"}}>
            < PieChart / >
            </div>
            
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
                <PieChart read = {
                  theUsers.filter(user => user.read_stat === 0).length
                }
                unread = {
                  theUsers.filter(user => user.read_stat === 0).length
                }
                />


            </CardText>
          </Card>
    </Col>

}

export default SearchCard;
