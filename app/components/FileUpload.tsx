import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Cancel from '@mui/icons-material/Cancel';
import Check from '@mui/icons-material/Check';
import { Progress } from './Progress';
import { DataTable } from './DataTable';
import { Typography } from '@mui/material';

interface File {
  name: string
  type: string
}

interface Props {

}

export const FileUpload: React.FC<Props> = () => {
  const [fileDetails, setFileDetails] = useState<File | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [result, setResult] = useState<'success' | 'fail' | null>(null);

  const setFile = (event: any) => {
    console.log('event', event.target.files)
    console.log('filename', event.target.files[0].name)

    const fileSelected = {
      name: event.target.files[0].name,
      type: event.target.files[0].type,
    }

    setFileDetails(fileSelected);
  }

  const nullFile = () => {
    setFileDetails(null);
    setResult(null);
  }

  const sendFile = () => {
    setSending(true);
  }

  const onProgressDone = () => {
    setSending(false);
    if (fileDetails && fileDetails.type === 'text/csv') {
      setResult('success');
    } else {
      setResult('fail');
    }
  }

  return (
    <div style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h5">Predict SOC</Typography>
      <p>Please upload a valid SOC csv file</p>
      {result === 'fail' && (
        <div style={{ margin: '20px auto 0', width: '300px' }}>
          <Typography variant="h6" color="error">Error</Typography>
          <p>Unfortunately your file upload has failed.  We can only accept valid CSV files.  This is a work in progress, we hope to be able to provide a more compelling contribution utility soon.</p>
        </div>
      )}
      {result === 'success' && (
        <>
          <div style={{ margin: '20px auto 0', width: '450px' }}>
            <Typography variant="h6" color="secondary">Success!</Typography>
            <p>Your CSV upload has completed successfully. Thank you for contributing to the DISER project.</p>
          </div>
          <DataTable />
        </>
      )}
      {!result && (
        <>
          <div style={{ height: '40px', marginTop: '10px' }}>
            {sending && <Progress onDone={onProgressDone} />}
          </div>
          <div style={{ height: '50px' }}>
            {fileDetails && !sending && <p>Upload: {fileDetails.name}</p>}
            {fileDetails && sending && <p>Uploading... {fileDetails.name}</p>}
          </div>
          {!fileDetails && (
            <Button variant="contained" component="label" color="primary">
              {" "}
              <AddIcon /> Select CSV
              <input type="file" hidden onChange={setFile} />
            </Button>
          )}
          {fileDetails && (
            <>
              <Button disabled={sending} onClick={nullFile} variant="contained" component="label" color="error" style={{ marginRight: '10px' }}>
                {" "}
                <Cancel /> Cancel
              </Button>
              <Button disabled={sending} onClick={sendFile} variant="contained" component="label" color="primary" style={{ marginLeft: '10px' }}>
                {" "}
                <Check /> Send File
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
