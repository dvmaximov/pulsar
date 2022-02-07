import { v4 as newId } from "uuid";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

import TaskActionItem from "../../components/Tasks/TaskActionItem";
import TaskActionEdit from "../../components/Tasks/TaskActionEdit";
import BaseDialog from "../../components/BaseDialog";

import { tasks } from "../../store";

const TaskActionList = () => {
  const params = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const [action, setAction] = useState(null);
  const [currentTask, setCurrentTask] = useState({});
  const [modified, setModified] = useState(false);

  useEffect(() => {
    tasks.fetchById(params.id).then((task) => setCurrentTask(task));
  }, []);

  const onCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const onEdit = useCallback((action) => {
    setAction(action);
    setOpenDialog(true);
  }, []);

  const onAddAction = useCallback(() => {
    setAction(null);
    setOpenDialog(true);
  }, []);

  const onRemove = (id) => {
    const actions = currentTask.actions.filter((action) => action.id !== id);
    setCurrentTask((task) => ({ ...task, actions }));
    tasks.update(currentTask);
  };

  const onSubmit = (action) => {
    if (!action.id) action.id = newId();
    const idx = currentTask.actions.findIndex((item) => item.id === action.id);
    const newActions = [...currentTask.actions];
    if (idx === -1) {
      newActions.push(action);
    } else {
      newActions[idx] = { ...action };
    }
    const updatedTask = { ...currentTask, actions: [...newActions] };
    setCurrentTask(updatedTask);
    setOpenDialog(false);
    tasks.update(updatedTask);
  };

  const items = Array.isArray(currentTask.actions)
    ? currentTask.actions.map((action) => (
        <TaskActionItem
          key={action.id}
          action={action}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))
    : null;

  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        padding: 1,
        minHeight: "98%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">Состав программы</Typography>
        <Button variant="contained" color="primary" onClick={onAddAction}>
          Добавить
        </Button>
      </Box>
      <List>{items}</List>
      <BaseDialog open={openDialog} onCloseDialog={onCloseDialog}>
        <TaskActionEdit
          open={openDialog}
          onCloseDialog={onCloseDialog}
          onSubmit={onSubmit}
          action={action}
        />
      </BaseDialog>
    </Box>
  );
};

export default observer(TaskActionList);
