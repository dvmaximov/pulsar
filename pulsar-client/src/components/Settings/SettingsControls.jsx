import Button from "@mui/material/Button";

import { settings } from "../../store";

const SettingsControls = ({ openDialog, openConfirm }) => {
  const onSubmitUpdate = () => {
    settings.shutdown;
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          openConfirm("update");
        }}
        sx={{ mr: 1, mb: 1 }}
      >
        Обновление сервера
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          openConfirm("shutdown");
        }}
        sx={{ mr: 1, mb: 1 }}
      >
        Выключить устройство
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          openDialog("azimuth");
        }}
        sx={{ mr: 1, mb: 1 }}
      >
        Калибровка азимута
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          openDialog("slope");
        }}
        sx={{ mr: 1, mb: 1 }}
      >
        Калибровка наклона
      </Button>
    </>
  );
};

export default SettingsControls;
