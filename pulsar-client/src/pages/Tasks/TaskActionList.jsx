import { v4 as newId } from "uuid";
import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";

import TaskActionItem from "../../components/Tasks/TaskActionItem";
import TaskActionEdit from "../../components/Tasks/TaskActionEdit";
import BaseDialog from "../../components/BaseDialog";
import ConfirmDialog from "../../components/ConfirmDialog";

import { tasks } from "../../store";

const TaskActionList = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [action, setAction] = useState(null);
  const [currentTask, setCurrentTask] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);
  const [removeAction, setRemoveAction] = useState(null);

  const onToList = useCallback(() => {
    navigate(`/tasks`);
  }, []);

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

  const onRemove = (action) => {
    setRemoveAction(action);
    setOpenConfirm(true);
  };

  const onRemoveOk = () => {
    if (removeAction) {
      const actions = currentTask.actions.filter(
        (item) => removeAction.id !== item.id
      );
      const updatedTask = { ...currentTask, actions };
      setCurrentTask(updatedTask);
      tasks.update(updatedTask).then(() => {
        setRemoveAction(null);
      });
    }
    setOpenConfirm(false);
  };

  const onRemoveCancel = () => {
    setRemoveAction(null);
    setOpenConfirm(false);
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
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={onToList}
            sx={{ mr: 1 }}
          >
            К списку
          </Button>
          <Button variant="contained" color="primary" onClick={onAddAction}>
            Добавить
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontStyle: "italic",
            color: "blue",
            my: 1,
          }}
        >
          {`Наименование: ${currentTask.name || ""}`}
        </Typography>
      </Box>
      {items && items.length <= 0 && (
        <Box
          sx={{
            my: 10,
            fontWeight: "bold",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Список действий пуст
        </Box>
      )}
      <List>{items}</List>
      <BaseDialog open={openDialog} onCloseDialog={onCloseDialog}>
        <TaskActionEdit
          open={openDialog}
          onCloseDialog={onCloseDialog}
          onSubmit={onSubmit}
          action={action}
        />
      </BaseDialog>
      <ConfirmDialog
        open={openConfirm}
        onOk={onRemoveOk}
        onCancel={onRemoveCancel}
      >
        <Typography sx={{ mb: 2 }}>Удалить выбранное действие?</Typography>
        <Typography align="center" sx={{ fontWeight: "bold" }}>
          {removeAction?.type?.name}
        </Typography>
      </ConfirmDialog>
    </Box>
  );
};

export default observer(TaskActionList);
