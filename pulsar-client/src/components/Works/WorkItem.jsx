import { observer } from "mobx-react-lite";
import { format, parseISO, getTime } from "date-fns";
import { ru } from "date-fns/locale";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

import { works, dictonary } from "../../store";

const WorkItem = ({ work, onSelect, onRemove }) => {
  return (
    <ListItem
      sx={{
        color: "text.primary",
        mb: 0.5,
        p: 0.2,
        width: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#ffffff",
          width: "80%",
          border: "1px solid #001e3c",
          borderRadius: "2px",
          cursor: "pointer",
          flexWrap: "wrap",
          "&:hover": {
            bgcolor: "#f1f1f1",
            color: "text.secondary",
          },
        }}
      >
        <Typography
          variant="p"
          component="span"
          sx={{ width: { xs: "100%", sm: "20%" }, padding: 1 }}
        >
          {work.status.name}
        </Typography>
        <Typography
          variant="p"
          component="span"
          sx={{ width: { xs: "100%", sm: "40%" }, padding: 1 }}
        >
          {work.item.name}
        </Typography>
        {work.startTime && (
          <Typography
            variant="p"
            component="span"
            sx={{ width: { xs: "100%", sm: "20%" }, padding: 1 }}
          >
            {format(new Date(work.startTime), "dd-MM-yyyy - HH:mm")}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          flexGrow: 1,
          justifyContent: "center",
          ml: 1,
        }}
      >
        <Button variant="outlined" size="small" onClick={() => onRemove(work)}>
          удалить
        </Button>
      </Box>
    </ListItem>
  );
};

export default observer(WorkItem);
