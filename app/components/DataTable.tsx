import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export const DataTable = () => {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Your Location ID</TableCell>
            <TableCell align="right">icr94245</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Closest IDs to your profile</TableCell>
            <TableCell align="right">icr23427 | icr88693 | icr65278</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Predicted SOC</TableCell>
            <TableCell align="right">0.706</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Prediction Error</TableCell>
            <TableCell align="right">4.04%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Prediction Confidence</TableCell>
            <TableCell align="right">96.11%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}