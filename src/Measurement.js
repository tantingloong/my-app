import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';

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
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Today is {date}, key in your measurement
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="weight"
            label="Weight"
            helperText="1st button from right | take 1st value"
            fullWidth
            type="number"
            autoComplete="weight"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="fatPercent"
            label="Fat %"
            helperText="1st button from right | wait for 2nd value"
            fullWidth
            type="number"
            autoComplete="fatPercent"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="viceralFat"
            label="Voceral Fat"
            helperText="2nd button from right"
            fullWidth
            type="number"
            autoComplete="viceralFat"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="boneMass"
            label="Bone Mass"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="boneMass"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="bmr"
            label="BMR (in Cal)"
            helperText="4th button from right"
            fullWidth
            type="number"
            autoComplete="bmr"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="metabolicAge"
            label="Metabolic Age"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="metabolicAge"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="muscleMass"
            label="Muscle Mass"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="muscleMass"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="physiqueRating"
            label="Physique Rating"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="physiqueRating"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="waterPercent"
            label="Water %"
            helperText="3rd button from right"
            fullWidth
            type="number"
            autoComplete="waterPercent"
          />
        </Grid>
        <Grid item xs={12} md={6} component="gender" container alignItems="center" spacing={1}>
          <Grid item>Male</Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>Female</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
