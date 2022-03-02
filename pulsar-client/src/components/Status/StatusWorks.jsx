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
    .filter((item) => item.status.id === dictonary.STATUS.STATUS_WAIT)
    .map((work) => (
      <ListItem key={work.id}>
        {work.item.name}{" "}
        {format(new Date(work.startTime), "dd-MM-yyyy - HH:mm")}
      </ListItem>
    ));

  const runWorks = works.workList
    .filter((item) => item.status.id === dictonary.STATUS.STATUS_RUN)
    .map((work) => <ListItem key={work.id}>{work.item.name}</ListItem>);

  let details = null;
  const currentWork = works.currentWork?.work;
  if (currentWork) {
    details = currentWork.details
      .filter((item) => item.status.id === dictonary.STATUS.STATUS_RUN)
      .map((detail) => {
        return <ListItem key={detail.id}>{detail.type.name}</ListItem>;
      });
  }

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
      <Typography variant="span" paragraph>
        Запланированные
      </Typography>
      <List>{waitWorks}</List>
      <Typography variant="span">Текущая задача </Typography>
      {runWorks.length === 0 && (
        <Typography variant="span">отсутствует</Typography>
      )}
      {runWorks.length !== 0 && <List>{runWorks}</List>}
      <Typography variant="span" paragraph>
        Текущее действие{" "}
      </Typography>
      {details && <List>{details}</List>}
    </Box>
  );
};

export default observer(StatusWorks);
