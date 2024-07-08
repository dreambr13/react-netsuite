import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';

import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';


function createData(id, type, duedate, payee, bill, billamount, amountremaining, payment, currency, referencenumber, invoicedate, paymentprofilename) {
  return {
    id,
    type, duedate, payee, bill, billamount, amountremaining, payment, currency, referencenumber, invoicedate, paymentprofilename
  };
}

const rows = [
  createData(1, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(2, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(3, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(4, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(5, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(6, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(7, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(8, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(9, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(10, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(11, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(12, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(13, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(14, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(15, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(16, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(17, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(18, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(19, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(20, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(21, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(22, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(23, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(24, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(25, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
  createData(26, 'Bill',' Jun 10th, 2020','12K Vendor CUA Pk Test Trim','www.google.com', 30, 30, 30,	'USD','		', 'Jun 10th, 2020', 'US Wire-CitiDirect Funds Trans'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'type',
    numeric: false,
    disablePadding: true,
    label: 'Type',
  },
  {
    id: 'duedate',
    numeric: false,
    disablePadding: false,
    label: 'DueDate',
  },
  {
    id: 'payee',
    numeric: false,
    disablePadding: false,
    label: 'Payee',
  },
  {
    id: 'bill',
    numeric: false,
    disablePadding: false,
    label: 'Bill',
  },
  {
    id: 'billamount',
    numeric: false,
    disablePadding: false,
    label: 'BillAmount',
  },
  {
    id: 'amountremaining',
    numeric: false,
    disablePadding: false,
    label: 'AmountRemaining',
  },
  {
    id: 'payment',
    numeric: true,
    disablePadding: false,
    label: 'Payment',
  },
  {
    id: 'currency',
    numeric: true,
    disablePadding: false,
    label: 'Currency',
  },
  {
    id: 'referencenumber',
    numeric: true,
    disablePadding: false,
    label: 'ReferenceNumber',
  },
  {
    id: 'invoicedate',
    numeric: false,
    disablePadding: false,
    label: 'InvoiceDate',
  },
  {
    id: 'paymentprofilename',
    numeric: false,
    disablePadding: false,
    label: 'PaymentProfileName',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{backgroundColor:'#d0e0f5'}}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.duedate}</TableCell>
                    <TableCell align="right">{row.payee}</TableCell>
                    <TableCell align="right">{row.bill}</TableCell>
                    <TableCell align="right">{row.billamount}</TableCell>
                    <TableCell align="right">{row.amountremaining}</TableCell>
                    <TableCell align="right">{row.payment}</TableCell>
                    <TableCell align="right">{row.currency}</TableCell>
                    <TableCell align="right">{row.referencenumber}</TableCell>
                    <TableCell align="right">{row.invoicedate}</TableCell>
                    <TableCell align="right">{row.paymentprofilename}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton={true}
          showLastButton={true}
          sx={{
            background: 'rgb(66,66,66)', 
            color: 'rgb(41, 39, 39)',
            ".MuiTablePagination-selectLabel": {
              color: "white",
            },
            ".MuiInputBase-root.MuiInputBase-colorPrimary.MuiTablePagination-input":{
              color:"white"
            },
            ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiTablePagination-selectIcon.MuiSelect-iconStandard":{
              color:"white"
            },
            ".MuiTablePagination-displayedRows":{
              color:"white"
            },
            ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium":{
              color:"white"
            },
            ".MuiTablePagination-selectLabel":{
              display:"none"
            }
          }}
        />
      </Paper>
    </Box>
  );
}
