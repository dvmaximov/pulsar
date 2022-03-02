import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { settings } from "../../store";

const SettingsEditor = () => {
  useEffect(() => {
    settings.fetch();
  }, []);

  const settingList = settings.settingList.map((setting) => {
    return <ListItem key={setting.id}>{setting.name}</ListItem>;
  });

  return (
    <>
      <List>{settingList}</List>
    </>
  );
};

export default observer(SettingsEditor);
