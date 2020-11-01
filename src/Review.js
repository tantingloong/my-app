import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DisplayMeasures from './FinalStep';
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



export default function Review() {
  const classes = useStyles();
  const [measure, setMeasure] = React.useContext(MyContext); //Context API

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Let's review with Coach Felicia, {measure.firstName}
      </Typography>
      <DisplayMeasures />
    </React.Fragment>
  );
}
