import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import EuroIcon from '@material-ui/icons/Euro';
import PublicIcon from '@material-ui/icons/Public';
import blue from "@material-ui/core/colors/blue";

const CardMenu = () => {
  return (
    <Row>
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
              <EuroIcon style={{color:"blue"}} />
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Total Cost</CardTitle>
              <CardText>3,125,000</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
      
      
      
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Graphite on roof</CardTitle>
              <CardText>150,000</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
      
      
      
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
              <PublicIcon/>
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Global Spread</CardTitle>
              <CardText>12%</CardText>
            </Col>
        
          </Row>
        </Card>
      </Col>
      
      
      <Col sm="3">
      <Card body>
          <Row>
            <Col sm="4">
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Roentgen</CardTitle>
              <CardText>3,6</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CardMenu;