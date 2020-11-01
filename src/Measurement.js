import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import {MyContext} from './MyContext'; //Context API

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function Measurement() {
  const [measure, setMeasure] = React.useContext(MyContext); //Context API

  const handleChange = event => {
    const { name, value } = event.target;
    console.log("got it - handleChange", name, value);

    if (name === "isFemale") {
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
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
         Hi {measure.firstName}, today is {date}, please key in your measurement 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="weight"
            label="Weight"
            helperText="1st button from right | take 1st value"
            fullWidth
            type="number"
            autoComplete="weight"
            defaultValue={measure.weight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="fatPercent"
            label="Fat %"
            helperText="1st button from right | wait for 2nd value"
            fullWidth
            type="number"
            autoComplete="fatPercent"
            defaultValue={measure.fatPercent}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="viceralFat"
            label="Viceral Fat"
            helperText="2nd button from right"
            fullWidth
            type="number"
            autoComplete="viceralFat"
            defaultValue={measure.viceralFat}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="boneMass"
            label="Bone Mass"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="boneMass"
            defaultValue={measure.boneMass}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="bmr"
            label="BMR (in Cal)"
            helperText="4th button from right"
            fullWidth
            type="number"
            autoComplete="bmr"
            defaultValue={measure.bmr}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="metabolicAge"
            label="Metabolic Age"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="metabolicAge"
            defaultValue={measure.metabolicAge}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="muscleMass"
            label="Muscle Mass"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="muscleMass"
            defaultValue={measure.muscleMass}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="physiqueRating"
            label="Physique Rating"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="physiqueRating"
            defaultValue={measure.physiqueRating}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="waterPercent"
            label="Water %"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="waterPercent"
            defaultValue={measure.waterPercent}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6} name="gender" container alignItems="center" spacing={1}>
          <Grid item>Male</Grid>
          <Grid item>
            <AntSwitch checked={measure.isFemale} onChange={handleChange} name="isFemale" />
          </Grid>
          <Grid item>Female</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
