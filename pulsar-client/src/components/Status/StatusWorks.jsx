import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { format, parseISO, getTime } from "date-fns";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { works, dictonary } from "../../store";

const StatusWorks = () => {
  useEffect(() => {
    works.fetch();
  }, []);

  const waitWorks = works.workList
    .filter((item) => item.type.id === dictonary.STATUS.STATUS_WAIT)
    .map((work) => (
      <ListItem key={work.id}>
        {work.item.name} ---&nbsp;
        {format(new Date(work.startTime), "dd-MM-yyyy - HH:mm")}
      </ListItem>
    ));

  return (
    <Box
      sx={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "5px",
        minHeight: "98%",
        p: 0.5,
        m: 0.5,
      }}
    >
      <Typography>Информация о заданиях</Typography>
      <Typography variant="span">Запланированные</Typography>
      <List>{waitWorks}</List>
    </Box>
  );
};

export default observer(StatusWorks);
