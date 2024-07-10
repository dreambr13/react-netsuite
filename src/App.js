import './App.css';
import CustomPaginationActionsTable from './components/CustomPaginationActionsTable'
import {ThemeProvider, styled, useTheme} from '@mui/material/styles';
import React, { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Processing from './components/Processing';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E7F2FF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'black',
  border:'1px solid #87B6FE',
  borderWidth:'1px',
  boxShadow:'none',
  fontFamily:'Roboto,sans-serif',
  fontSize:'16px',
  fontWeight:'600'
}));

function App() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  const [tab, setTab] = useState('one');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const totalItems = 50; // Example: Total number of items
  
  const [numTransaction, setNumTransaction] = React.useState(0);
  const [totalPayAmount, setTotalPayAmount] = React.useState(0);
  const [emailAlarm, setEmailAlarm] = useState(false);
  const [dateProcess, setDateProcess] = useState(Date);
  const [totalCreditAmount, setTotalCreditAmount] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Fetch data or update content based on newPage
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(0); // Reset page to 0 when rows per page changes
    // Fetch data or update content based on newRowsPerPage
  };

  const changeTab = (event, newValue) => {
    setTab(newValue);
  };

  const changeEmailNotification  = (event)=>{
    setEmailAlarm([event.target.checked, event.target.checked]);
  }
  useEffect(()=>{setTimeout(() => {
    setTab('one'); // Set value after data is fetched
  }, 1000)},[]);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'rgb(249,249,249)'}} >
      <Grid container spacing={1}>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={12}>
          <ThemeProvider theme={theme}>
            <Typography sx={{ fontSize: isMediumScreen ? '32px' : '24px', ml: 2 }}>Bill payment Processing</Typography>
          </ThemeProvider>
          
          <Divider textAlign="right" sx={{marginBottom:3}}></Divider>
          <Processing></Processing>
          <Item sx ={{mt:6, ml:'2px', mr:'2px'}}>Payment Information</Item>
        </Grid>

        {/* payment information */}
        <Grid item xs={3} ml={2}>
          <Grid item xs={12}>
              <Typography variant="subtitle1" sx = {{fontSize:'14px', fontWeight:'600', fontFamily:'Roboto, sans-serif',color:'rgb(68, 68, 68)' }}>Number of Transactions</Typography>
          </Grid>
          <Grid item xs={12} sx={{mb:2.5}}>
            <Typography sx = {{color:'rgb(124, 124, 124)', fontWeight:400, fontSize:'14px'}}>1</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="subtitle1" sx = {{fontSize:'14px', fontWeight:'600', fontFamily:'Roboto, sans-serif',color:'rgb(68, 68, 68)' }}>Date to be Processed*</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx = {{color:'rgb(124, 124, 124)', fontWeight:400, fontSize:'14px'}}>4/23/2024</Typography> 
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
              <Typography variant="subtitle1" sx = {{fontSize:'14px', fontWeight:'600', fontFamily:'Roboto, sans-serif',color:'rgb(68, 68, 68)' }}>Total Payment Amount</Typography>
          </Grid>
          <Grid item xs={12} sx={{mb:2.5}}>
            <Typography sx = {{color:'rgb(124, 124, 124)', fontWeight:400, fontSize:'14px'}}>30</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="subtitle1" sx = {{fontSize:'14px', fontWeight:'600', fontFamily:'Roboto, sans-serif',color:'rgb(68, 68, 68)' }}>Total Credit Amount</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx = {{color:'rgb(124, 124, 124)', fontWeight:400, fontSize:'14px'}}>1</Typography> 
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox  onChange={changeEmailNotification}/>} label={<Typography sx={{color:'rgb(124, 124, 124)', fontWeight:400, fontFamily:'Roboto, sans-serif', fontSize: 14 }}> Email Notification</Typography>} />
          </FormGroup>
        </Grid>
        {/* payment tab */}
        <Grid item xs={12} ml={2} sx={{mt:6}}>
          <Tabs
            value={tab}
            onChange={changeTab}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            scrollButtons="auto"
          >
            <Tab value="one" label="Transaction" sx = {{textTransform:'none'}}/>
            <Tab value="two" label="Classification" sx = {{textTransform:'none'}}/>
          </Tabs>
        </Grid>
        {/* payment table */}
        <Grid item xs={12} sx={{m:2}}>
          <CustomPaginationActionsTable
              count = {totalItems}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
