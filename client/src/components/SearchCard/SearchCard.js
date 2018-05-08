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



const SearchCard  = (props) => (

        <Col md={6}>
  


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
        There were this many users: {props.all.filter()}
    </CardText>
  </Card>
    </Col>

)

export default SearchCard;
