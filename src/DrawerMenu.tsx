import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
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
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { Link } from '@mui/material';
import './DrawerMenu.css';
import { Typography } from '@material-ui/core';
import CardMenu from './CardMenu';
import PaperMenu from './PaperMenu';
import TableMenu from './TableMenu';





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

export default function DrawerMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    if(open==true){
      setOpen(false);
    }
    else{
      setOpen(true);
    }
  
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




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Drawer
      
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
       
        <DrawerHeader>
      
        </DrawerHeader>
       
        <List>
            <ListItem>
              sailee.chitnis@kilowott.com
            </ListItem>
     
            <Divider />

          {['Dashboard', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardOutlinedIcon/> : < ManageAccountsOutlinedIcon  />}
              </ListItemIcon>
              <ListItemText secondary={text} />
            </ListItem>
          ))}
        </List>
        
        <Divider />
        
        {/* Function list */}
  <List>
          <ListItem>
              <ListItemText primary="Function"/>
          </ListItem>
      
      {/* Sales */}
          <ListItemButton onClick={handleClickSale}>
            <ListItemIcon>
            <PointOfSaleOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Sales" />
              {sale ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={sale} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <MonetizationOnOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Deals" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <LocalGroceryStoreOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Orders" />
          </ListItemButton>
          
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <TravelExploreOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Markets" />
          </ListItemButton>
        
        </List>
      </Collapse>
  
       
       {/* Deliveries */}
      
         <ListItemButton onClick={handleClickDelivery}>
            <ListItemIcon>
           <EmojiTransportationOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Deliveries" />
              {delivery ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={delivery} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
               <ConstructionOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Projects" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAddOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Allocations" />
          </ListItemButton>
     
     </List>
     </Collapse>
    {/* Finance */}

    
    <ListItemButton onClick={handleClickFinance}>
            <ListItemIcon>
            <AccountBalanceOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Finances" />
              {finance ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={finance} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PendingOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Payables" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
               <PaymentsOutlinedIcon /> 
            </ListItemIcon>
            <ListItemText secondary="Receivables" />
          </ListItemButton>
    </List>
    </Collapse>



          <ListItemButton onClick={handleClickAnalytic}>
            <ListItemIcon>
           <AnalyticsOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Analytics" />
              {analytic ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={analytic} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PatternOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Projections" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AssignmentOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Reports" />
          </ListItemButton>
    
        </List>
      </Collapse>
      </List>


{/* Organisation list */}

<List>
          <ListItem>
              <ListItemText primary="Organisation"
                sx={{
                fontSize:'2px'
                }}/>
          </ListItem>
      
      {/* Services */}
          <ListItemButton onClick={handleClickService}>
            <ListItemIcon>
            <MiscellaneousServicesOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Services" />
              {service ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={service} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <WidgetsOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Bundles" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <SettingsSuggestOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Addons" />
          </ListItemButton>
          
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <PriceCheckOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Rates" />
          </ListItemButton>
        
        </List>
      </Collapse>
  
       
       {/* Associates */}
      
         <ListItemButton onClick={handleClickAssociate}>
            <ListItemIcon>
           <PeopleAltOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Associates" />
              {associate ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={associate} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
               <PersonPinCircleOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Employees" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonPinOutlinedIcon/>
            </ListItemIcon>
            <ListItemText secondary="Non-Employees" />
          </ListItemButton>
     
     </List>
     </Collapse>
    
    {/* Customers */}

    
    <ListItemButton onClick={handleClickCustomer}>
            <ListItemIcon>
            <PublicOutlinedIcon/>
            </ListItemIcon>
        
            <ListItemText secondary="Customers" />
              {customer ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
      
      <Collapse in={customer} timeout="auto" unmountOnExit>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountTreeOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Accounts" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ContactsOutlinedIcon /> 
            </ListItemIcon>
            <ListItemText secondary="Contacts" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DomainOutlinedIcon /> 
            </ListItemIcon>
            <ListItemText secondary="Industries" />
          </ListItemButton>
    </List>
    </Collapse>
</List>


{/* Configuration */}
<List>
          <ListItem>
              <ListItemText primary="Configuration"/>
          </ListItem>
           
          <ListItem>
          <ListItemIcon>
              <SettingsOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Settings"/>
             
          </ListItem>
           
</List>  

{/* Communication */}

<List>
          <ListItem>
              <ListItemText primary="Communication"/>
          </ListItem>
          {['Email', 'Chat'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <EmailOutlinedIcon/> : <ForumOutlinedIcon/>}
              </ListItemIcon>
              <ListItemText secondary={text} />
            </ListItem>
          ))}
              <ListItem>
              <ListItemIcon>
              <TaskAltOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Todo"/>
             
          </ListItem>
</List>

  
       
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="icon-list">
              <IconButton
               color="inherit"
               aria-label="open drawer"
               onClick={handleDrawerOpen}
               edge="start"
               sx={{ mr: 2, ...(open && { display: 'block' }) }}>
                
                <MenuIcon />
              </IconButton>
          
               <Link href="#" underline="hover"
                sx={{
                  paddingTop:'15px'
                }}>
                  {'DASHBOARD'}
                 
              </Link>
          </div>
          <Typography variant="h5" style={{color: '#3E86E4', marginTop:'14px'}} noWrap component="div"
         >
           Dashboard
            </Typography>
          <div className="card-content">
              <CardMenu/> 
          </div>
          <div className="paper-content">
            <PaperMenu/>
          </div>

          <div className="table-content">
            <TableMenu/>
          </div>
   
      </Main>
      
    </Box>
  );
}
