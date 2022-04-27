import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    </div>
  );
};