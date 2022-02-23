import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import EuroIcon from '@material-ui/icons/Euro';
import PublicIcon from '@material-ui/icons/Public';
import blue from "@material-ui/core/colors/blue";
import LayersIcon from '@material-ui/icons/Layers';
import { purple } from '@mui/material/colors';
import SupportIcon from '@mui/icons-material/Support';

const CardMenu = () => {
  return (
    <Row>
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
              <EuroIcon style={{color:blue[500],fontSize:60}} />
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Total Cost</CardTitle>
              <CardText style={{fontSize:22}}>3,125,000</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
      
      
      
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
            <LayersIcon style={{color:"#8433EE",fontSize:60}} />
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Graphite on roof</CardTitle>
              <CardText style={{fontSize:22}}>150,000</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
      
      
      
      <Col sm="3">
        <Card body>
          <Row>
            <Col sm="4">
              <PublicIcon style={{color:"#33EEB6",fontSize:60}}/>
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Global Spread</CardTitle>
              <CardText style={{fontSize:22}}>12%</CardText>
            </Col>
        
          </Row>
        </Card>
      </Col>
      
      
      <Col sm="3">
      <Card body>
          <Row>
            <Col sm="4">
              <SupportIcon style={{color:"#EB9B23",fontSize:60}}/>
            </Col>
            
            <Col sm="8">
              <CardTitle style={{color:"grey"}}>Roentgen</CardTitle>
              <CardText style={{fontSize:22}}>3,6</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CardMenu;