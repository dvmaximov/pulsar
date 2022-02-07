import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";

const TaskItem = ({ task, onSelect, onRemove }) => {
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
        onClick={() => onSelect(task.id)}
      >
        <Typography
          variant="p"
          component="span"
          sx={{ width: { xs: "100%", sm: "40%" }, padding: 1 }}
        >
          {task.name}
        </Typography>
        <Typography
          variant="p"
          component="span"
          sx={{
            padding: 1,
            fontSize: "caption.fontSize",
          }}
        >
          {task.description}
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
        <Button
          variant="outlined"
          size="small"
          sx={{ mr: { xs: 0, sm: 0.5 }, mb: { xs: 0.5, sm: 0 } }}
        >
          запуск
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => onRemove(task.id)}
        >
          удалить
        </Button>
      </Box>
    </ListItem>
  );
};

export default TaskItem;
