import Box from '@mui/material/Box';
import { Header } from '../components/Header';
import { FileUpload } from '../components/FileUpload'

export default function Contribute() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <FileUpload />
      </Box>
    </div>
  );
}
