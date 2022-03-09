import { useState } from "react";
import Typography from "@mui/material/Typography";

import SettingsList from "../components/Settings/SettingsList";
import SettingsControls from "../components/Settings/SettingsControls";
import SettingsCalibrate from "../components/Settings/SettingsCalibrate";
import BaseDialog from "../components/BaseDialog";

const Settings = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [mode, setMode] = useState("azimuth");

  const onOpenDialog = (modeValue) => {
    setMode(modeValue);
    setOpenDialog(true);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Typography variant="h6">Настройки</Typography>
      <SettingsList></SettingsList>
      <SettingsControls openDialog={onOpenDialog}></SettingsControls>
      <BaseDialog open={openDialog} onCloseDialog={onCloseDialog}>
        <SettingsCalibrate onCancel={onCloseDialog} mode={mode} />
      </BaseDialog>
    </>
  );
};

export default Settings;
