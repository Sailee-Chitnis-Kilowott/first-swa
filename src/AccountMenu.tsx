import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Checkbox, Dialog, FormControl, Input, InputLabel, Tab, Tabs, TextField, Typography } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {Row, Col } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { styled,alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DrawerMenu from './App/Components/SideNavigation/DrawerMenu';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


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
  currency: string,
  contractRenewal: string,
  parent: string
) {
  return {
    name,
    legalName,
    businessName,
    businessType,
    industryType,
    currency,
    contractRenewal,
    parent,
  };
}

const rows = [
  createData(
    "Kilowott Child Company Again",
    "Kilowott Agency",
    "Kilowott Agency Pvt.Ltd.",
    "Website Design",
    "Travel & Hospitality Europe",
    "INR",
    "20/02/2022 18:30:00",
    ""
  ),
  createData(
    "Kilowott Child Company Again",
    "Kilowott Agency",
    "Kilowott Agency Pvt.Ltd.",
    "Website Design",
    "Travel & Hospitality Europe",
    "INR",
    "20/02/2022 18:30:00",
    ""
  ),
  createData(
    "Kilowott Child Company Again",
    "Kilowott Agency",
    "Kilowott Agency Pvt.Ltd.",
    "Digital Marketing",
    "Travel & Hospitality Europe",
    "INR",
    "20/02/2022 18:30:00",
    ""
  ),
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

// industry type select
const industryType = [
{
  value: 'fin',
  label: 'Fin Tech US',
},
{
  value: 'ret',
  label: 'Retail India',
},
{
  value: 'se',
  label: 'Travel & Hospitality SE Asia',
},
{
  value: 'med',
  label: 'Media & OTT UK',
},
{
  value: 'tra',
  label: 'Travel & Hospitality Europe (Norway)',
},

];

//snackbar
export interface State extends SnackbarOrigin {
  open: boolean;
}


export default function AccountMenu() {
  
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

//industry select
const[industry, setIndustry] = React.useState('');

const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIndustry(event.target.value);
};


//snackbar
const [state, setState] = React.useState<State>({
  open: false,
  vertical: 'top',
  horizontal: 'center',
});
const { vertical, horizontal, open } = state;

const handleClick = (newState: SnackbarOrigin) => () => {
  setState({ open: true, ...newState });
  handleEditClose();
};

const handleClose = () => {
  setState({ ...state, open: false });
};

const buttons = (
  <React.Fragment>
   
    <Button variant="contained"  style={{marginTop:20}}
      onClick={handleClick({
        vertical: 'top',
        horizontal: 'right',
      })}
    >
    UPDATE ACCOUNT
    </Button>
  </React.Fragment>
);

return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DrawerMenu/>
      
        <TableContainer sx={{marginTop:15}} component={Paper}>
          <Row>
            <Col sm="4">
              <Typography variant="h6" style={{marginLeft:20}}>
                Accounts
              </Typography>
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
        

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical, horizontal }}   
        key={vertical + horizontal}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Update Account Kilowott Done
          </Alert>
        </Snackbar>
        
   
            <Button variant="contained" style={{backgroundColor:"#8433EE"}} startIcon={<AddBoxIcon/>}>
            NEW CHILD ACCOUNT</Button>
            &nbsp; &nbsp;
            <Button variant="contained" style={{backgroundColor:blue[500],marginRight:20}} startIcon={<AddIcon/>}>
            NEW ACCOUNT</Button>
        
            </div>
            </Col>
            
            </Row>
        
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"/>
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
                          <Checkbox color="primary"/>
                        </TableCell>
                <TableCell style={{width:140}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{width:100}} align="left">{row.legalName}</TableCell>
                <TableCell style={{width:140}} align="left">{row.businessName}</TableCell>
                <TableCell style={{width:140}} align="left">{row.businessType}</TableCell>
                <TableCell style={{width:150}} align="left">{row.industryType}</TableCell>
                <TableCell style={{width:140}} align="left">{row.currency}</TableCell>
                <TableCell style={{width:140}} align="left">{row.contractRenewal}</TableCell>
                <TableCell style={{width:140}} align="left">{row.parent}</TableCell>
                <TableCell style={{width:140}} align="left"><OpenInFullIcon style={{fontSize:20,display:"block"}}/>
                <EditOutlinedIcon onClick={handleEditOpen} style={{fontSize:20,display:"block",marginTop:5,marginBottom:5}}/>
                <DeleteOutlineOutlinedIcon style={{fontSize:20,display:"block"}}/>
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

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
       
       
        <Paper elevation={4} style={{height:520,width:'97%',marginLeft:20,marginTop:20}} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="general" {...a11yProps(0)} />
                <Tab label="contract" {...a11yProps(1)} />
                <Tab label="payment" {...a11yProps(2)} />
              </Tabs>
 
          
           
         
             <TabPanel value={value} index={0}>
            <Paper elevation={4} style={{height:430,width:'100%',paddingLeft:20,paddingTop:20,paddingRight:20}}> 
              {/* general tab */}

                 <FormControl disabled fullWidth  variant="standard">
                  <InputLabel>Account Name</InputLabel>
                  <Input value="Kilowott Child Company Again"/>
                </FormControl>
               
               <FormControl fullWidth variant="standard">
                  <InputLabel style={{marginTop:4}}>Legal Name</InputLabel>
                  <Input value="Kilowott Agency"/>
                </FormControl>
               
                <FormControl fullWidth  variant="standard">
                  <InputLabel  style={{marginTop:4}}>Business Name</InputLabel>
                  <Input value="Kilowott Agency Pvt. Ltd."/>
                </FormControl>
               
                <FormControl fullWidth  variant="standard">
                  <InputLabel style={{marginTop:4}}>Country</InputLabel>
                  <Input value="Norway"/>
                </FormControl>
                
                <FormControl fullWidth variant="standard">
                  <InputLabel style={{marginTop:4}}>Business Type</InputLabel>
                  <Input value="Website Design"/>
                </FormControl>
                
                <TextField fullWidth variant="standard" style={{marginTop:4}}
               
                select
                  label="Industry Type"
                  value={industry}
                  onChange={handleIndustryChange}
                  SelectProps={{
                    native: true,
                  }}
             >
                  {industryType.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>


                {/* <FormControl fullWidth variant="standard">
                  <InputLabel style={{marginTop:4}}>Year of Association</InputLabel>
                  <Input  value="31/01/2022"/>
                </FormControl> */}

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setField(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider> */}
                              
              {/* <Button  onClick={UpdateUser} style={{marginTop:20}}></Button> */}
          {buttons}
     
            
              </Paper>
      </TabPanel> 
 
 
 {/* contract tab */}
                 <TabPanel value={value} index={1}>
                <Paper elevation={4} style={{height:430,width:'100%',paddingLeft:20,paddingTop:20,paddingRight:20}}>
                      <FormControl disabled fullWidth  variant="standard">
                            <InputLabel>Account Name</InputLabel>
                            <Input value="Kilowott Child Company Again"/>
                          </FormControl>
                        
                        <FormControl fullWidth variant="standard">
                            <InputLabel style={{marginTop:4}}>Legal Name</InputLabel>
                            <Input value="Kilowott Agency"/>
                          </FormControl>
                        
                          <FormControl fullWidth  variant="standard">
                            <InputLabel  style={{marginTop:4}}>Business Name</InputLabel>
                            <Input value="Kilowott Agency Pvt. Ltd."/>
                          </FormControl>
                        
                          <FormControl fullWidth  variant="standard">
                            <InputLabel style={{marginTop:4}}>Country</InputLabel>
                            <Input value="Norway"/>
                          </FormControl>
                          
                          <FormControl fullWidth variant="standard">
                            <InputLabel style={{marginTop:4}}>Business Type</InputLabel>
                            <Input value="Website Design"/>
                          </FormControl>
                          {buttons}
                          </Paper>
                      </TabPanel> 

                       {/* payment tab */}
            <TabPanel value={value} index={2}>
            <Paper elevation={4} style={{height:430,width:'100%',paddingLeft:20,paddingTop:20,paddingRight:20}}>
            <FormControl disabled fullWidth  variant="standard">
                  <InputLabel>Account Name</InputLabel>
                  <Input value="Kilowott Child Company Again"/>
                </FormControl>
               
               <FormControl fullWidth variant="standard">
                  <InputLabel style={{marginTop:4}}>Legal Name</InputLabel>
                  <Input value="Kilowott Agency"/>
                </FormControl>
               
                <FormControl fullWidth  variant="standard">
                  <InputLabel  style={{marginTop:4}}>Business Name</InputLabel>
                  <Input value="Kilowott Agency Pvt. Ltd."/>
                </FormControl>
               
                <FormControl fullWidth  variant="standard">
                  <InputLabel style={{marginTop:4}}>Country</InputLabel>
                  <Input value="Norway"/>
                </FormControl>
                
                <FormControl fullWidth variant="standard">
                  <InputLabel style={{marginTop:4}}>Business Type</InputLabel>
                  <Input value="Website Design"/>
                </FormControl>
                {buttons}
</Paper>
</TabPanel>
</Paper>
</Dialog> 


    </Box>
   
  );
}
