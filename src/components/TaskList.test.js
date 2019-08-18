import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import { withPinnedTasks } from "../../stories/TaskList.stories";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../theme";
import { createMount } from "@material-ui/core/test-utils";

describe("SearchField", () => {
  let mount;
  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it("renders pinned tasks at the start of the list", () => {
    const div = document.createElement("div");
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };

    let wrapper = mount(
      <MuiThemeProvider theme={theme}>
        <TaskList tasks={withPinnedTasks} {...events} />
      </MuiThemeProvider>
    );

    console.log(wrapper);

    // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
    const lastTaskInput = wrapper.find('#id').to.have.lengthOf(1);

    // querySelector(
    //   '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    // );
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
  });
});

