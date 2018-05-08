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
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
        There were this many users:
        {_.uniq(theUsers).map((element, index) => (
          <li key={index}>{element.user_from}</li> 
        ))}
    </CardText>
  </Card>
    </Col>

}

export default SearchCard;
