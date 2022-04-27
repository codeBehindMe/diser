import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const FileUpload = () => {
  return (
    <div className="App">
      <Button variant="contained" component="label" color="primary">
        {" "}
        <AddIcon /> Upload a file
        <input type="file" hidden />
      </Button>
    </div>
  );
}
