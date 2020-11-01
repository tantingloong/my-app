import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {MyContext} from './MyContext'; //Context API


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));



export default function DisplayMeasures() {
  const classes = useStyles();
  const [measure, setMeasure] = React.useContext(MyContext); //Context API

  useEffect(() => {
    console.log("useEffect", measure);
    var fatWeight = (measure.fatPercent / 100) * measure.weight;
    var musclePercent = (measure.muscleMass / measure.weight) * 100;

    setMeasure({
     ...measure,
     calc_fetch : false,
     calc_fatWeight : fatWeight.toFixed(2),
     calc_musclePercent : musclePercent.toFixed(2),
    });
  }, []); // No re-run the effect 


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Weight" secondary="in KG" />
          <Typography variant="body2">{measure.weight}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Fat" secondary="%" />
          <Typography variant="body2">{measure.fatPercent}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Fat" secondary="in KG" />
          <Typography variant="body2">{measure.calc_fatWeight}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Viceral Fat" secondary="index" />
          <Typography variant="body2">{measure.viceralFat}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Bone Mass" secondary="in KG" />
          <Typography variant="body2">{measure.boneMass}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="BMR" secondary="in Kcal" />
          <Typography variant="body2">{measure.bmr}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Metabolic Age" secondary="years" />
          <Typography variant="body2">{measure.metabolicAge}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Muscle Mass" secondary="in KG" />
          <Typography variant="body2">{measure.muscleMass}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Muscle Mass" secondary="%" />
          <Typography variant="body2">{measure.calc_musclePercent}</Typography>
        </ListItem>    
        <ListItem className={classes.listItem}>
          <ListItemText primary="Physique Rating" secondary="index" />
          <Typography variant="body2">{measure.physiqueRating}</Typography>
        </ListItem>  
        <ListItem className={classes.listItem}>
          <ListItemText primary="Water" secondary="%" />
          <Typography variant="body2">{measure.waterPercent}</Typography>
        </ListItem>          
      </List>
      <Grid container spacing={2}>

      </Grid>
    </React.Fragment>
  );
}
