import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { works } from "../../store";

const CurrentWork = () => {
  useEffect(() => {
    works.fetchCurrentWork();
  }, []);

  let details = null;
  const currentWork = works.currentWork?.work;
  if (currentWork) {
    details = currentWork.details.map((detail) => {
      return (
        <ListItem key={detail.id}>
          {detail.type.name} {detail.status.name}
        </ListItem>
      );
    });
  }

  return (
    <>
      <Typography variant="h6">Текущая задача</Typography>
      <List>{details}</List>
    </>
  );
};

export default observer(CurrentWork);
