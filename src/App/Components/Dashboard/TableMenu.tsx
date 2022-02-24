import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'reactstrap';
import { typography } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

function createData(
    image:string,
    name: string,
    priority:string,
    buttonColor:string,
    earning:string
    // earning:string
) {
  return { image,name,priority,buttonColor,earning};
}

const rows = [
  createData('https://avatars2.githubusercontent.com/u/10367109?s=460&amp;amp;u=2abf95f9e01132e8e2915def42895ffe99c5d2c6&amp;amp;v=4','Garderoben CSS Magician','High','blue','$1337'),
  createData('https://avatars2.githubusercontent.com/u/71094850?s=460&amp;u=66c16f5bb7d27dc751f6759a82a3a070c8c7fe4b&amp;v=4','Lunees Reactor Engineer','Low','green','$0.99'),
  createData('https://avatars.githubusercontent.com/u/16208742?s=120&amp;v=4','Mikes-gh Developer','Medium','purple','$19.12K')


];


export default function TableMenu() {
    const classes = useStyles();
  return (
      <Row>
          <Col sm="6">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">Earnings&nbsp;(g)</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{display:"flex",alignItems:"center"}}>
                  
              <Avatar src={row.image} />
             <Typography style={{paddingLeft:10,paddingRight:100}}> {row.name}</Typography>
               
              </TableCell>

              <TableCell align="right"> 
              <Typography  className={classes.status}
              style={{backgroundColor:row.buttonColor}}>
              {row.priority}</Typography>
              
              </TableCell>
              <TableCell align="right">{row.earning}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Col>
    <Col sm="6">
        
    </Col>
    </Row>
  );
}
