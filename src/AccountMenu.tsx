  import * as React from 'react';

  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import {Col, Row } from 'reactstrap';
  import Button from '@mui/material/Button';
  import OpenInFullIcon from '@mui/icons-material/OpenInFull';
  import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
  import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
  import { Alert, Checkbox, FormControl, Tab, Tabs, TextField, Typography } from '@mui/material';
  import SearchIcon from '@mui/icons-material/Search';
  import { styled,alpha } from '@mui/material/styles';
  import InputBase from '@mui/material/InputBase';
  import AddIcon from '@material-ui/icons/Add';
  import AddBoxIcon from '@material-ui/icons/AddBox';
  import { blue } from '@mui/material/colors';

  import Dialog from '@mui/material/Dialog';
  import ListItemText from '@mui/material/ListItemText';
  import ListItem from '@mui/material/ListItem';
  import List from '@mui/material/List';
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import CloseIcon from '@mui/icons-material/Close';
  import Slide from '@mui/material/Slide';
  import { TransitionProps } from '@mui/material/transitions';
  import { Box } from '@material-ui/core';


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


  function createData(
    name: string,
    legalName: string,
    businessName: string,
    businessType: string,
    industryType: string,
    currency:string,
    contractRenewal:string,
    parent:string,

  ) {
    return { name,legalName,businessName,businessType,industryType,currency,contractRenewal,parent}
  }

  const rows = [
    createData('Kilowott Child Company Again','Kilowott Agency','Kilowott Agency Pvt.Ltd.','Website Design','Travel & Hospitality Europe','INR','20/02/2022 18:30:00',''),
    createData('Kilowott Child Company Again','Kilowott Agency','Kilowott Agency Pvt.Ltd.','Website Design','Travel & Hospitality Europe','INR','20/02/2022 18:30:00',''),
    createData('Kilowott Child Company Again','Kilowott Agency','Kilowott Agency Pvt.Ltd.','Digital Marketing','Travel & Hospitality Europe','INR','20/02/2022 18:30:00',''),

  ];


  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  // tab function
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  export default function Demo() {
    // edit function
    const [edit, setEdit] = React.useState(false);
  const handleEditOpen = () => {
    setEdit(true);
  };

  const handleEditClose = () => {
    setEdit(false);
  };
// tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


    return (
        <div style={{display:"flex",justifyContent:"right"}}>
        
            <Row>
                <Col sm="12">
                <TableContainer component={Paper}>
                <Row>
            <Col sm="4">
          <Typography variant="h6" style={{marginLeft:20}}>Accounts</Typography>
          </Col>
      
        <Col sm="8">
          <div style={{display:"flex",justifyContent:"right"}}>
            <div style={{width:350}}>
            <Search >
            <div style={{display:"flex",alignItems:"center"}}>
            <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            
            </Search>
            </div>
        
          
            <Button variant="contained" style={{backgroundColor:"#8433EE"}} startIcon={<AddBoxIcon/>}>
            NEW CHILD ACCOUNT</Button>
            &nbsp; &nbsp;
            <Button variant="contained" style={{backgroundColor:blue[500],marginRight:20}} startIcon={<AddIcon/>}>
            NEW ACCOUNT</Button>
        
            </div>
            </Col>
            
            </Row>
                
        <Table sx={{ minWidth: 600 }} aria-label="customized table" >

          

          <TableHead>
            <TableRow>
            <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              // indeterminate={numSelected > 0 && numSelected < rowCount}
              // checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
              <TableCell>NAME</TableCell>
              <TableCell align="left">LEGAL NAME</TableCell>
              <TableCell align="left">BUSINESS NAME</TableCell>
              <TableCell align="left">BUSINESS TYPE</TableCell>
              <TableCell align="left">INDUSTRY TYPE</TableCell>
              <TableCell align="left">CURRENCY</TableCell>
              <TableCell align="left">CONTRACT RENEWAL</TableCell>
              <TableCell align="left">PARENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                  <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            // checked={isItemSelected}
                            // inputProps={{
                            //   'aria-labelledby': labelId,
                            // }}
                          />
                        </TableCell>
                <TableCell style={{width:140}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{width:100}}  align="left">{row.legalName}</TableCell>
                <TableCell style={{width:140}}  align="left">{row.businessName}</TableCell>
                <TableCell style={{width:140}}  align="left">{row.businessType}</TableCell>
                <TableCell style={{width:150}} align="left">{row.industryType}</TableCell>
                <TableCell style={{width:140}} align="left">{row.currency}</TableCell>
                <TableCell style={{width:140}} align="left">{row.contractRenewal}</TableCell>
                <TableCell style={{width:140}} align="left">{row.parent}</TableCell>
                <TableCell style={{width:140}} align="left"><OpenInFullIcon style={{fontSize:20,display:"block"}}/><EditOutlinedIcon onClick={handleEditOpen} style={{fontSize:20,display:"block",marginTop:5,marginBottom:5}}/><DeleteOutlineOutlinedIcon style={{fontSize:20,display:"block"}}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </Col>
            </Row>

  {/* edit page */}
  <Dialog
          fullScreen
          open={edit}
          onClose={handleEditClose}
          TransitionComponent={Transition}
        >
          <IconButton
                edge="start"
                color="inherit"
                onClick={handleEditClose}
                aria-label="close"
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
        <Typography variant='h6' style={{marginTop:20}}>Update Account</Typography>

        <Alert style={{marginTop:20}} severity="warning">Editing account for Kilowott Child Company</Alert>
       
       
        <Paper elevation={4} style={{height:520,width:'97%',marginLeft:20,paddingRight:10}} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="general" {...a11yProps(0)} />
                <Tab label="contract" {...a11yProps(1)} />
                <Tab label="payment" {...a11yProps(2)} />
              </Tabs>
 
          
          
          <Paper elevation={4} style={{height:430,width:'98%',marginLeft:20,marginTop:20}}>
            <TabPanel value={value} index={0}>
          
        
              <TextField style={{display:"block"}}
              disabled
          label="Account Name"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
     
   
          <TextField style={{display:"block"}}
          label="Legal Name"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
  
          <TextField style={{display:"block"}}
          label="Business Name"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
          <TextField style={{display:"block"}}
          label="Country"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
          <TextField style={{display:"block"}}
          label="Business Type"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
          <TextField style={{display:"block"}}
          label="Industry Type"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
          <TextField style={{display:"block"}}
          label="Year of Association"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
          type="date"
        />
     <Button variant="contained" style={{marginTop:20}}>UPDATE ACCOUNT</Button>

      </TabPanel>
    
      </Paper>
      
      </Paper>
            
            <TabPanel value={value} index={1}>
              {/* Item Two */}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* Item Three */}
            </TabPanel>
          
        
        
        
      
        </Dialog>

        </div>
    
    );
  }
