import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, Checkbox, Typography, Grid } from "@material-ui/core";
import { StarRate } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary[100]
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
            checked={state}
            onChange={onArchiveTask}
            inputProps={{
              "aria-label": "task checkbox"
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography variant={"subtitle1"}>{title}</Typography>
        </Grid>
        <Grid item xs={1}>
          <StarRate color={"secondary"} onClick={onPinTask} />
        </Grid>
      </Grid>
    </Card>
  );
}
