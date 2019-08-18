import React from 'react';

import Task from './Task';
import { makeStyles } from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  loading: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary[100],
  },
  empty: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary[100],
  },
}));

function TaskList({ loading, tasks, onPinTask, onArchiveTask }, props) {
  const classes = useStyles(props);

  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className={classes.loading}>loading</div>;
  }

  if (tasks.length === 0) {
    return <div className={classes.empty}>empty</div>;
  }

  return (
    <Grid container spacing={1} className={classes.root} justify={"center"}>
      {tasks.map(task => <Grid item xs={12}>
        <Task key={task.id} task={task} {...events} />
      </Grid>)}
    </Grid>
  );
}

export default TaskList;
