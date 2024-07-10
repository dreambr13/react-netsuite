import React, {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DownloadIcon from '@mui/icons-material/Download';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import axios from 'axios';

import {useResponsive} from '../hooks/use-responsive';
import $ from 'jquery';

// const { createProxyMiddleware } = require('http-proxy-middleware');

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const heroku_url = 'https://cors-anywhere.herokuapp.com/'
const api = 'https://9147342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=575&deploy=1&compid=9147342_SB1&ns-at=AAEJ7tMQ90pX58hxtHQLc4lgCWqgo09thlhdp_XBacFAtWVL0R8';

export default function Processing(/*accountArray, accTypeArray, vendorArray, subsidiaryArray*/){
    const smUp   = useResponsive('up', 'sm', '');
    const mdUp   = useResponsive('up', 'md', '');
    const lgDown = useResponsive('down', 'lg', '');
    
    const [accounts, setAccounts] = useState([]); //['US Bank 449', 'US Bank 4491', 'US Bank 4492', 'US Bank 4493','US Bank 4494'];
    const [accTypes, setaccTypes] = useState([]); //['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    const [vendors, setVendors] = useState([]); //  =  ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    const [subsidiarys, setSubsidiarys]  = useState([]); //['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];

    // const accounts    = ['US Bank 449', 'US Bank 4491', 'US Bank 4492', 'US Bank 4493','US Bank 4494'];
    // const accTypes    = ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    // const vendors     = ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    // const subsidiarys = ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];

    const initial_value = '';
    const [account, setAccount] = React.useState(initial_value);
    const [apaccount, setApaccount] = React.useState(initial_value);
    const [vendor, setVendor] = React.useState(initial_value);
    const [subsdiary, setSubsdiary] = React.useState(initial_value);
    const currentDate = new Date();
    const [fromDate, setFromDate] = useState(dayjs((new Date()).toLocaleDateString()))
    const [toDate, setToDate] = useState(dayjs((new Date()).toLocaleDateString()))
    
    const [dateRange, setDateRange] = useState([null, null]);

    $.ajax({
      url: 'https://9147342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=575&deploy=1&compid=9147342_SB1&ns-at=AAEJ7tMQ90pX58hxtHQLc4lgCWqgo09thlhdp_XBacFAtWVL0R8&q=account',
      method: 'GET',  
      headers: {
        'mode': 'no-cors',
        'Origin':'https://web.postman.co',
        'Content-Type':'text/json'
      },
      success: function(data) {
        console.log('Data received:', data);
      },
      error: function(xhr, status, error) {
        console.error('Error:', error);
      }
    });
    useEffect(() => {
      async function fetchData() {
        // console.log('requesting times')
        var settings = {
          "url": "https://9147342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=575&deploy=1&compid=9147342_SB1&ns-at=AAEJ7tMQ90pX58hxtHQLc4lgCWqgo09thlhdp_XBacFAtWVL0R8&q=account",
          "method": "GET",
          "timeout": 0,
        };
        
       

        const requestOptions = {
          method: "GET",
          mode: 'no-cors',
          headers: {
            'Accept':'*/*',
            'Origin':'https://web.postman.co',
            'Connection':'keep-alive',
            'Accept-Encoding':'gzip, deflate, br, zstd',
            'Content-Type':'text/plain',
            'Access-Control-Allow-Origin': '*', // Allow requests from all origins
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          },
        };
        try{
          fetch("https://9147342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=575&deploy=1&compid=9147342_SB1&ns-at=AAEJ7tMQ90pX58hxtHQLc4lgCWqgo09thlhdp_XBacFAtWVL0R8&q=account", requestOptions)
          .then(response => {
            if (!response.ok) {
              console.log(response);
            }
            console.log(response.data)
            return response.data;
          })
          .then((response) => {
            setAccounts(JSON.parse(response))
          })
          .catch(error=>{
            console.error('Fetch error:', error)
          })
          
        }catch (error) {
          console.error(error);
        }

        
        // const headers = {
        //   'Content-Type': 'text/plain', // Adjust content type as needed
        //   'Accept-Encoding': 'gZip, deflare, br',
        //   'Accept':'*/*',
        //   'Connection':'keep-alive',
        //   'redirect': "follow"
        // };
        // axios.get(api+'&q=account', {
        //   withCredentials: false, // Ensures cookies are sent and received,
        //   headers:headers,
        //   mode: "cors",
        // })
        // .then(response => {
        //   // Access cookies from response headers
        //   setAccounts(JSON.parse(response.data))
        // })
        // .catch(error => {
        //   console.error('Error fetching data:', error);
        // });
        
        axios.get(api+'&q=vendor', {
          withCredentials: false // Ensures cookies are sent and received
        })
        .then(response => {
          // Access cookies from response headers
          setVendors(JSON.parse(response.data))
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        axios.get(api+'&q=accttype', {
          withCredentials: false, // Ensures cookies are sent and received
          
        })
        .then(response => {
          // Access cookies from response headers
          setaccTypes(JSON.parse(response.data))
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        axios.get(heroku_url+api+'&q=subsidiary', {
          withCredentials: false // Ensures cookies are sent and received
        })
        .then(response => {
          // Access cookies from response headers
          setSubsidiarys(JSON.parse(response.data))
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      };
  
      fetchData();
    }, []);
   
    const changeAccount = (event) => {
      setAccount(event.target.value);
    };
    const changeApaccount = (event) =>{
      setApaccount(event.target.value);
    }
    const changeVendor = (event) =>{
      setVendor(event.target.value);
    }
    const changeSubsdiary = (event)=>{
      setSubsdiary(event.target.value);
    }
    const clickCancel = () =>{
      setAccount(initial_value);
      setApaccount(initial_value);
      setVendor(initial_value);
      setSubsdiary(initial_value);
      if(dateRange[0]!=null && dateRange[1]!=null){
        console.log('from date: ', dateRange[0].format('YYYY-MM-DD'))
        console.log('to date: ', dateRange[1].format('YYYY-MM-DD'))
      }
      setDateRange([null, null]);
    }
    const clickRedraw = ()=>{
      console.log('clickRedarw')
    }
    const clickDownload = ()=>{
      console.log('clickDownload')
    }
    const clickPrint = ()=>{
      console.log('clickPrint')
    }

    return(
        <Box sx={{ flexGrow: 1 , marginLeft:'2px'}}>
            <Grid container spacing={1} justifyContent="flex-end">
              <Grid item sm = {12} xs = {12} md={6} lg={10} mdoffset={3}>
                <FormControl sx={{ m: smUp?1:'5px', minWidth:160}} > 
                  <Typography sx = {{fontSize:'14px'}}>Account</Typography>
                  <Select
                      labelId="account-label"
                      id="account"
                      value={account}
                      onChange={changeAccount}
                      label="account"
                      sx = {{height:40}}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,
                            /* Other styles you may want to apply */
                          },
                        },
                      }}
                  >
                    {accounts.map((item) => (
                    <MenuItem
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              
                <FormControl sx={{ m: smUp?1:'5px', minWidth:160}}>
                  <Typography sx = {{fontSize:'14px'}}>A/P Account</Typography>
                  <Select
                      labelId="apaccount-label"
                      id="apaccount"
                      value={apaccount}
                      onChange={changeApaccount}
                      label="account"
                      sx = {{height:40}}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,
                            /* Other styles you may want to apply */
                          },
                        },
                      }}
                  >
                    {accTypes.map((item) => (
                    <MenuItem
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: smUp?1:'5px', minWidth:160 }}>
                  <Typography sx = {{fontSize:'14px'}}>Vendor</Typography>
                  <Select
                      labelId="vendor-label"
                      id="vendor"
                      value={vendor}
                      onChange={changeVendor}
                      label="account"
                      sx = {{height:40}}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,
                            /* Other styles you may want to apply */
                          },
                        },
                      }}
                  >
                    {vendors.map((item) => (
                    <MenuItem
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: smUp?1:'5px', minWidth:160 }}>
                  <Typography sx = {{fontSize:'14px'}}>Subsidiary</Typography>
                  <Select
                      labelId="subsdiary-label"
                      id="subsdiary"
                      value={subsdiary}
                      onChange={changeSubsdiary}
                      label="account"
                      sx = {{height:40}}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,
                            /* Other styles you may want to apply */
                          },
                        },
                      }}
                  >
                    {subsidiarys.map((item) => (
                    <MenuItem
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              
                <FormControl sx={{ ml:'5px',mt:'20px',minWidth:120}}>
                  {/* <Typography sx = {{fontSize:'14px'}}><span>Date</span></Typography> */}
                  
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{p:0}}>
                    <DemoContainer
                      components={[
                        'DateRangePicker',
                      ]}
                      
                    >{
                      smUp?(
                      <DemoItem component="DateRangePicker">
                        <DateRangePicker
                          // defaultValue={[fromDate, toDate]}
                          value={dateRange}
                          slotProps={{ textField: { size: 'small' } }}
                          sx = {{
                            ".MuiTypography-root.MuiTypography-body1.MuiMultiInputDateRangeField-separator":{display:'none'},
                          }}
                          onChange={(newValue)=>{setDateRange(newValue)}}
                        />
                      </DemoItem>):
                      (<DemoItem component="MobileDateRangePicker">
                        <MobileDateRangePicker
                          value={dateRange}
                          slotProps={{ textField: { size: 'small' } }}
                          sx = {{
                            ".MuiTypography-root.MuiTypography-body1.MuiMultiInputDateRangeField-separator":{display:'none'},
                            width:'300px',
                            height:'45px'
                          }}
                          onChange={(newValue)=>{setDateRange(newValue)}}
                        />
                      </DemoItem>)}
                      
                    </DemoContainer>
                    
                </LocalizationProvider>
                </FormControl>{
                  smUp==true?(
                  <FormControl sx={{ marginTop: smUp?'30px':'43px', marginLeft: smUp?'40px':'1px'}}>
                    <Button onClick = {clickCancel}>
                      <CancelOutlinedIcon sx = {{color:'#13438C'}}>
                      </CancelOutlinedIcon>
                    </Button>
                  </FormControl>):
                  <FormControl sx={{display:'none'}}></FormControl>
                }
              </Grid>
              
              <Grid item xs={6} md={1} lg={2} sx={{display:'flex', alignItems:'end'}}>
                {
                  smUp==true?(<FormControl sx={{display:'none'}}></FormControl>):
                  <FormControl sx={{ m: smUp?1:'5px'}}>
                    <Button onClick = {clickCancel}>
                      <CancelOutlinedIcon sx = {{color:'#13438C'}}/>
                    </Button>
                  </FormControl>
                }
                <FormControl sx={{ m: smUp?1:'5px'}} >
                  <Button onClick={clickRedraw}>
                    <AutorenewIcon/>
                  </Button>
                </FormControl>
                <FormControl sx={{ m: smUp?1:'5px'}} >
                  <Button onClick={clickDownload}>
                    <DownloadIcon/>
                    </Button>
                </FormControl>
                <FormControl sx={{ m: smUp?1:'5px'}} >
                  <Button onClick={clickPrint}>
                    <LocalPrintshopOutlinedIcon/>
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
        </Box>
    );
}