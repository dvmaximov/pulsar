import { observer } from "mobx-react-lite";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StatusDevice = () => {
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
      <Typography>Информация об устройстве</Typography>
    </Box>
  );
};

export default observer(StatusDevice);
