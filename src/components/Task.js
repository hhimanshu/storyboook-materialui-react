import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Checkbox, Typography, Grid } from "@material-ui/core";
import { StarRate } from "@material-ui/icons";
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary[600]
  }
}));

export default function Task(
  { task: { id, title, state }, onArchiveTask, onPinTask },
  props
) {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <Grid container justify={"space-around"} alignItems={"center"}>
        <Grid item xs={1}>
          <Checkbox
            checked={state === "TASK_ARCHIVED"}
            onChange={onArchiveTask}
            inputProps={{
              "aria-label": "task checkbox"
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant={"subtitle1"}
            color={state === "TASK_ARCHIVED" ? "textSecondary" : "textPrimary"}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <StarRate
            color={state === "TASK_PINNED" ? "secondary" : "inherit"}
            onClick={onPinTask}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
