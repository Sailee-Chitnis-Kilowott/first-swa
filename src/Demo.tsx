import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PatternOutlinedIcon from '@mui/icons-material/PatternOutlined';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { styled,alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@material-ui/icons/Add';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { blue } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
  import { TransitionProps } from '@mui/material/transitions';
import Demo1 from './Demo1';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


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


export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    if(open==true){
      setOpen(false);
    }
    else{
      setOpen(true);
    }
  
  };

// edit function
const [edit, setEdit] = React.useState(false);
const handleEditOpen = () => {
  setEdit(true);
};

const handleEditClose = () => {
  setEdit(false);
};

const [sale, setSale] = React.useState(false);

const handleClickSale = () => {
  setSale(!sale);
};

const [delivery, setDelivery] = React.useState(false);

const handleClickDelivery = () => {
  setDelivery(!delivery);
};

const [finance, setFinance] = React.useState(false);

const handleClickFinance = () => {
  setFinance(!finance);
};

const [analytic, setAnalytic] = React.useState(false);

const handleClickAnalytic = () => {
  setAnalytic(!analytic);
};

const [service, setService] = React.useState(false);

const handleClickService = () => {
  setService(!service);
};

const [associate, setAssociate] = React.useState(false);

const handleClickAssociate = () => {
  setAssociate(!associate);
};

const [customer, setCustomer] = React.useState(false);

const handleClickCustomer = () => {
  setCustomer(!customer);
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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
  {/* <Demo1/> */}
      <Main open={open}>
        <DrawerHeader />
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'block' }) }}
          >
            <MenuIcon />
          </IconButton>
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
                              
              <Button variant="contained" style={{marginTop:20}}>UPDATE ACCOUNT</Button>
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
                          </Paper>
                      </TabPanel> 

                       {/* pament tab */}
            <TabPanel value={value} index={2}>
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
           
            </TabPanel>
    
     
</Paper>

</Dialog> 

      </Main>
    </Box>
  );
}
