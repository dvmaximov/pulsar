import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import TaskIcon from "@mui/icons-material/Task";

export default [
  {
    label: "Главная",
    path: "/",
    icon: <HomeIcon color="primary" />,
  },
  {
    label: "Программы",
    path: "/tasks",
    icon: <ListAltIcon color="primary" />,
  },
  {
    label: "Задачи",
    path: "/works",
    icon: <TaskIcon color="primary" />,
  },
  {
    label: "Настройки",
    path: "/settings",
    icon: <SettingsApplicationsIcon color="primary" />,
  },
];
