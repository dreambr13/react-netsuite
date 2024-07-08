import React,{useState} from 'react';
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

import {useResponsive} from '../hooks/use-responsive';
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
const api = 'https://9147342-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=575&deploy=1&compid=9147342_SB1&ns-at=AAEJ7tMQ90pX58hxtHQLc4lgCWqgo09thlhdp_XBacFAtWVL0R8';
export default function Processing(/*accountArray, accTypeArray, vendorArray, subsidiaryArray*/){
    const smUp   = useResponsive('up', 'sm', '');
    const mdUp   = useResponsive('up', 'md', '');
    const lgDown = useResponsive('down', 'lg', '');

    // const accounttemp         = {accountArray};
    // const accTypeArraytemp    = {accTypeArray};
    // const vendorArraytemp     = {vendorArray};
    // const subsidiaryArraytemp = {subsidiaryArray};

    // const accounts    = accounttemp.slice(1, -1).split(',')
    // const accTypes    = accTypeArraytemp.slice(1, -1).split(',')
    // const vendors     = vendorArraytemp.slice(1, -1).split(',')
    // const subsidiarys = subsidiaryArraytemp.slice(1, -1).split(',')
    
    const accounts = ['US Bank 449', 'US Bank 4491', 'US Bank 4492', 'US Bank 4493','US Bank 4494'];
    const accTypes = ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    const vendors  =  ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    const subsidiarys = ['US Bank 4495', 'US Bank 4496', 'US Bank 4497', 'US Bank 4498','US Bank 4499'];
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.example.com/data');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
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
      console.log('clickCancel')
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
    const currentDate = new Date();

    const [account, setAccount] = React.useState('');
    const [apaccount, setApaccount] = React.useState('');
    const [vendor, setVendor] = React.useState('');
    const [subsdiary, setSubsdiary] = React.useState('');
    const [dateRange, setDateRange] = useState([ 
      currentDate.toLocaleDateString(),
      currentDate.toLocaleDateString()
    ]);

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
                      sx = {{height:45}}
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
                      sx = {{height:45}}
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
                      sx = {{height:45}}
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
                      sx = {{height:45}}
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
              
                <FormControl sx={{ marginTop: '1px', minWidth:120}}>
                  <Typography sx = {{fontSize:'14px'}}>Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs} sx={{p:0}}>
                    <DemoContainer
                      components={[
                        'DateRangePicker',
                      ]}
                      
                    >{
                      smUp?(
                      <DemoItem component="DateRangePicker">
                        <DateRangePicker
                          slotProps={{ textField: { size: 'small' } }}
                          sx = {{
                            ".MuiTypography-root.MuiTypography-body1.MuiMultiInputDateRangeField-separator":{display:'none'},
                           
                          }}
                          onChange={(newValue)=>setDateRange(newValue)}
                        />
                      </DemoItem>):
                      (<DemoItem component="MobileDateRangePicker">
                        <MobileDateRangePicker
                          defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                          slotProps={{ textField: { size: 'small' } }}
                          sx = {{
                            ".MuiTypography-root.MuiTypography-body1.MuiMultiInputDateRangeField-separator":{display:'none'},
                            width:'300px',
                            height:'45px'
                          }}
                        />
                      </DemoItem>)}
                      
                    </DemoContainer>
                    
                </LocalizationProvider>
                </FormControl>{
                  smUp==true?(
                  <FormControl sx={{ m: smUp?1:'1px'}}>
                    <Button onClick = {clickCancel}>
                      <CancelOutlinedIcon sx = {{marginTop: smUp?'30px':'43px', marginLeft: smUp?'40px':'1px', color:'#13438C'}}>
                      </CancelOutlinedIcon>
                    </Button>
                  </FormControl>):
                  <FormControl sx={{display:'none'}}></FormControl>
                }
              </Grid>
              
              <Grid item xs={6} md={1} lg={2} sx={{display:'flex', alignItems:'end'}}>
                {
                  smUp==true?(<FormControl sx={{display:'none'}}></FormControl>):
                  <FormControl sx={{ m: smUp?1:'1px'}}>
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