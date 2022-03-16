import { observer } from "mobx-react-lite";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

import { useStatusBgColor } from "../../hooks/useStatusBgColor";
import { useDateFormat } from "../../hooks/useDateFormat";

const WorkItem = ({ work, onSelect, onRemove }) => {
  const bgColor = useStatusBgColor(work.status);
  const date = useDateFormat(work.startTime);
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
          width: "80%",
          border: "1px solid #001e3c",
          borderRadius: "2px",
          cursor: "pointer",
          flexWrap: "wrap",
          bgcolor: bgColor,
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
        <Typography
          variant="p"
          component="span"
          sx={{ width: { xs: "100%", sm: "20%" }, padding: 1 }}
        >
          {date}
        </Typography>
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
