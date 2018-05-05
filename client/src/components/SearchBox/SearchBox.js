import React from "react";
import {
    CSVLink,
    CSVDownload
} from 'react-csv';
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import Textfield from "material-ui/TextField";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";




class SearchBox extends React.Component {

    renderSearchedLogic() {
    if (this.state.searched) {
      return (
        <div className="padder">
          <RaisedButton className="separateButton" label="Generate CSV" />
          <RaisedButton label="Clear" onClick={() => this.getAll()} />
        </div>
      );
    } else {
      return <div className="padder">
          <Row>
            <Col md={12} xs={12}>
              <Textfield floatingLabelText="Search" value={this.state.search} name="search" onChange={this.handleInputChange} />
              <DropDownMenu name="searchKey" value={this.state.searchKey} onChange={this.handleChange}>
                <MenuItem value={"user_from"} primaryText="Receiver" />
                <MenuItem value={"user_to"} primaryText="Sender" />
                {/* <MenuItem value={"subject"} primaryText="Subject" /> */}
                <MenuItem value={"location"} primaryText="Subject" />
              </DropDownMenu>
              <RaisedButton label="Search" onClick={() => this.searchAll()} />
            </Col>
          </Row>
        </div>;
    }
  }


    render(){
        return(
            <Card>
                <CardText>Search</CardText>
                {this.renderSearchedLogic()}
              </Card>
        )
    }
}

export default SearchBox;
