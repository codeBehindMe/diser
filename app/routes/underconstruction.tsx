import Box from '@mui/material/Box';
import { Header } from '../components/Header';

export default function UnderConstruction() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <img src="/assets/under_construction.png" alt="under construction" style={{ width: '350px' }} />
        <p>This page is under construction</p>
      </Box>
    </div>
  );
}
