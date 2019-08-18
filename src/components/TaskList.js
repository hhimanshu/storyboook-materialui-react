import React from "react";

import Task from "./Task";
import { makeStyles } from "@material-ui/styles";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  loading: {
    width: "80%",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary[100]
  },
  empty: {
    width: "80%",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary[100]
  }
}));

function TaskList({ loading, tasks, onPinTask, onArchiveTask }, props) {
  const classes = useStyles(props);

  const events = {
    onPinTask,
    onArchiveTask
  };

  if (loading) {
    return <Loading classes={classes} />;
  }

  if (tasks.length === 0) {
    return <Empty classes={classes} />;
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === "TASK_PINNED"),
    ...tasks.filter(t => t.state !== "TASK_PINNED")
  ];

  return (
    <Grid container spacing={1} className={classes.root} justify={"center"}>
      {tasksInOrder.map(task => (
        <Grid item xs={12}>
          <Task key={task.id} task={task} {...events} />
        </Grid>
      ))}
    </Grid>
  );
}

const Loading = ({ classes }) => (
  <Grid container justify={"center"} className={classes.loading}>
    <Grid item xs={6}>
      <Grid container spacing={3} direction={"column"} alignItems={"center"}>
        <Grid item xs={7}>
          <Typography variant={"subtitle2"}>Loading your tasks</Typography>
        </Grid>
        <Grid item xs={6}>
          <CircularProgress color={"secondary"} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const Empty = ({ classes }) => (
  <Grid container className={classes.empty} justify={"center"}>
    <Grid item xs={6}>
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid item xs={7}>
          <Check fontSize={"large"} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant={"h6"}>You have no tasks</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant={"subtitle2"}>Sit back and relax!</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList;
