import React from "react";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";
import {
    MuiThemeProvider
} from "material-ui/styles";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";


class ResultRead extends React.Component {
    render(){
        const {date, users, username} = this.props;
        return(
            <MuiThemeProvider>
            <Card>
                <CardText>Report Scan as of {date} </CardText>
                <Row>
                  <Col md={4} sm={6} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={users.length} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={username} />
                  </Col>
                  <Col md={4} xs={12}>
                    <CardText style={{ fontWeight: 100, color: "grey" }}>
                      User Count
                    </CardText>
                    <CardTitle className="highlight" title={username} />
                  </Col>
                </Row>
              </Card>
              </MuiThemeProvider>
        )
    }
}

export default ResultRead;
