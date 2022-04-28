import { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { LineGraph } from './LineGraph';

interface Props {
  title: string
  id: string
}

export const InfoDrawer: React.FC<Props> = ({ title, id }) => {

  return(
    <div>
      <Typography variant="h6" noWrap>
        Location Profile
      </Typography>
      <TableContainer >
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">icr05623</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Soil texture</TableCell>
              <TableCell align="right">NA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Upper depth (cm)</TableCell>
              <TableCell align="right">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lower depth (cm)</TableCell>
              <TableCell align="right">20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell align="right">NA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Closest Profile IDs</TableCell>
              <TableCell align="right">icr00233, icr40323, icr03523, icr55663</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" noWrap>
        VISNIR Spectra Profile
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={"item"} />
        </ListItem>
      </List>
      <LineGraph />

      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px auto' }}>
        <Button variant="contained" color="primary" >Download this dataset</Button>
      </div>
    </div>
  );
};