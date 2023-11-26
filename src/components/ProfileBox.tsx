import {
  CardHeader,
  Divider,
  Typography,
  LinearProgress,
  Box,
  Avatar,
} from "@mui/material";

function Profile() {
  return (
    <>
      <Box p={3} display="flex" alignItems="flex-start">
        <Avatar src="/static/images/1.jpg" />
        <Box pl={2}>
          <Typography variant="h4" gutterBottom>
            Shawn
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: 2, bgcolor: "#000000" }} />
      <Typography> Participation Rate: </Typography>

      <LinearProgress variant="determinate" value={89} />
      <Box>
        <Typography variant="caption" sx={{ fontSize: 16 }}>
          89%
        </Typography>
      </Box>

      <Box pt={2} display="flex">
        <Box pr={8}>
          <Typography gutterBottom variant="h2" sx={{ fontSize: 16 }}>
            Points:
          </Typography>
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            485
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h2" sx={{ fontSize: 16 }}>
            Task Completed:
          </Typography>
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            8
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
