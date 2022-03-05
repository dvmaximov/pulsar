import Box from "@mui/material/Box";

import StatusWorks from "../components/Status/StatusWorks";
import StatusDevice from "../components/Status/StatusDevice";

import { dictonary } from "../store";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f9f9f9",
          padding: 1,
          minHeight: "98%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        updated
        <Box
          sx={{
            padding: 1,
            width: { xs: "100%", sm: "45%" },
            minHeight: "95%",
          }}
        >
          <StatusWorks />
        </Box>
        <Box
          sx={{
            padding: 1,
            width: { xs: "100%", sm: "45%" },
            minHeight: "95%",
          }}
        >
          <StatusDevice />
        </Box>
      </Box>
    </>
  );
};

export default Home;
