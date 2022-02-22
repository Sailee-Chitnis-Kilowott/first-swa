import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Box, Paper, Typography } from '@mui/material';
import { Button, Col, Row } from 'reactstrap';

import SearchIcon from '@mui/icons-material/Search';
import { styled,alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const columns: GridColDef[] = [
  { field: 'id', headerName: 'NAME', width: 70 },
  { field: 'legalName', headerName: 'LEGAL NAME', width: 150 },
  { field: 'businessName', headerName: 'BUSINESS NAME', width: 180 },
  {field: 'businessType', headerName: 'BUSINESS TYPE',width: 180,},
  {field: 'industryType', headerName: 'INDUSTRY TYPE',width: 180,},
  {field: 'currency', headerName: 'CURRENCY',width: 140,},
  {field: 'parent', headerName: 'PARENT',width: 140,},
  // {field: 'fullName',headerName: '',description: 'This column has a value getter and is not sortable.',sortable: false,
  // width: 160,valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,

];

const rows = [
  { id:'Kilowott Child Company Again', legalName:'Kilowott Agency', businessName: 'Kilowott Agency Pvt.Ltd.', businessType:'Website Design',industryType:'Travel & Hospitality Europe',currency:'INR',parent:'Kilowott'},
  { id:'Kilowott Child Company Again', legalName:'Kilowott Agency', businessName: 'Kilowott Agency Pvt.Ltd.', businessType:'Website Design',industryType:'Travel & Hospitality Europe',currency:'INR',parent:'Kilowott'},
 { id:'Kilowott Child Company Again', legalName:'Kilowott Agency', businessName: 'Kilowott Agency Pvt.Ltd.', businessType:'Digital Marketing',industryType:'Travel & Hospitality Europe',currency:'INR',parent:'Kilowott'},
 { id:'Kilowott', legalName:'Kilowott Agency', businessName: 'Kilowott Agency Pvt.Ltd.', businessType:'Digital Services',industryType:'Travel & Hospitality Europe',currency:'INR',parent:'Kilowott'},
  { id:'Fathamster', legalName: 'Fathamster LLP', businessName: 'Kilowott Agency Pvt.Ltd.', businessType:'Website Design',industryType:'Travel & Hospitality Europe',currency:'INR',parent:'Kilowott'},


];
export default function AccountMenu() {
  return (
    // <Paper style={{ height: 400, width: '100%'}}>
    <div style={{ height: 400, width: '100%',display:"flex",justifyContent:"right"}}>
       {/* <Box sx={{ width: '100%' }}>

<Paper sx={{ width: '100%', mb: 2 }}> */}
 
      <div style={{ height: 400, width:'80%',paddingRight:20}}>
      <Row>
          <Col sm="4">
        <Typography variant="h6" style={{marginLeft:20}}>Accounts</Typography>
        </Col>
     
      <Col sm="8">
        <div style={{display:"flex",justifyContent:"right"}}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
          <Button variant="contained" color="primary" startIcon={<AddBoxIcon/>}>
          NEW CHILD ACCOUNT</Button>
          &nbsp; &nbsp;
          <Button variant="contained" color="primary" startIcon={<AddIcon/>}>
          NEW ACCOUNT</Button>
       
          </div>
          </Col>
          
          </Row>
       
      <DataGrid style={{marginTop:20}}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> 
         
     
      </div>


      
    {/* </Paper>
    </Box>
      */}
    </div>
    // </Paper>
  );
}
