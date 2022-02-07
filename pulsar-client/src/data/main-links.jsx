import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

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
    label: "Настройки",
    path: "/settings",
    icon: <SettingsApplicationsIcon color="primary" />,
  },
];
