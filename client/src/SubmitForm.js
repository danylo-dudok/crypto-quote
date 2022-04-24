import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SubmitForm = (props) =>(
    <><TextField
      id="outlined-multiline-static"
      label="Quote"
      multiline
      rows={4}
      value={props.textState}
      onChange={props.onQuoteUpdate} />
      <Button variant="outlined" onClick={props.submitQuote}>Quote</Button></>
  );

export default SubmitForm;
