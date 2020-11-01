import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MyContext} from './MyContext'; //Context API

export default function AddressForm() {
  const [measure, setMeasure] = React.useContext(MyContext); //Context API

  const handleChange = event => {
    const { name, value } = event.target;
    console.log("got it - handleChange", name, value);

    if (name === "firstTime") {
      const { checked } = event.target;
      setMeasure({
        ...measure,
        [name]: checked,
      });
    } else {
      setMeasure({
        ...measure,
        [name]: value,
      });
    }

    
  };

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Welcome to Joy Studio {measure.firstName}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            defaultValue={measure.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            defaultValue={measure.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="firstTime" checked={measure.firstTime} onChange={handleChange} >
              </Checkbox>
            }
            label="This is my first check-in with Coach Felicia" 
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
