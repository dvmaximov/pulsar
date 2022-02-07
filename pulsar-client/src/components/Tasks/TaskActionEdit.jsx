import { observer } from "mobx-react-lite";
import { useState, useMemo } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dictonary } from "../../store";

const TaskActionEdit = ({ action, onSubmit, onCloseDialog }) => {
  const initialType = useMemo(
    () => ({
      id: dictonary.actionTypes[0].id,
      name: dictonary.actionTypes[0].name,
    }),
    []
  );

  const initialAction = useMemo(
    () => ({
      id: null,
      type: initialType,
      value1: 0.0,
      value2: 0.0,
      value3: 0.0,
    }),
    []
  );

  const [currentAction, setCurrentAction] = useState(action || initialAction);
  const [currentType, setCurrentType] = useState(() =>
    dictonary.actionTypes.find((item) => item.id === currentAction.type.id)
  );

  const onValue1Change = (e) => {
    setCurrentAction(() => ({ ...currentAction, value1: +e.target.value }));
  };

  const onValue2Change = (e) => {
    setCurrentAction(() => ({ ...currentAction, value2: +e.target.value }));
  };

  const onValue3Change = (e) => {
    setCurrentAction(() => ({ ...currentAction, value3: +e.target.value }));
  };

  const onTypeChange = (e) => {
    const type = e.target.value;
    setCurrentType(type);
    setCurrentAction({
      ...currentAction,
      type: { id: type.id, name: type.name },
      value1: 1,
      value2: 0,
      value3: 0,
    });
  };

  const types = useMemo(
    () =>
      dictonary.actionTypes.map((type) => (
        <MenuItem key={type.id} value={type}>
          {type.name}
        </MenuItem>
      )),
    []
  );

  return (
    <>
      <DialogTitle>
        <Typography>Действие</Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl fullWidth sx={styles.gutters}>
            <Select autoFocus value={currentType} onChange={onTypeChange}>
              {types}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label={currentType.value1.label}
              value={currentAction.value1}
              onChange={onValue1Change}
              type="number"
              inputProps={{
                max: currentType.value1.max,
                min: currentType.value1.min,
                step: currentType.value1.step,
              }}
              sx={styles.gutters}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          {currentType.id === 4 && (
            <TextField
              label={currentType.value2.label}
              value={currentAction.value2}
              onChange={onValue2Change}
              type="number"
              inputProps={{
                max: currentType.value2.max,
                min: currentType.value2.min,
                step: currentType.value2.step,
              }}
              sx={styles.gutters}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
          {currentType.id === 4 && (
            <TextField
              label={currentType.value3.label}
              value={currentAction.value3}
              onChange={onValue3Change}
              type="number"
              inputProps={{
                max: currentType.value3.max,
                min: currentType.value3.min,
                step: currentType.value3.step,
              }}
              sx={styles.gutters}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog}>Отмена</Button>
        <Button onClick={() => onSubmit(currentAction)}>Сохранить</Button>
      </DialogActions>
    </>
  );
};

const styles = {
  gutters: {
    my: 1,
  },
};

export default observer(TaskActionEdit);
