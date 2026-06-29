import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

export default function MediaCardSkeleton() {

      let {isDay} = useSelector(state => state.nightMode)
      
  return (
    <Card sx={{ width : 345, background : isDay ? '#3c3c3c' : ''}}>
      <Skeleton variant="rectangular" height={140} />

      <CardContent>
        <Skeleton variant="text" width="60%" height={40} />

        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="95%" />
        <Skeleton variant="text" width="80%" />
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Skeleton variant="circular" width={40} height={40} />

        <Skeleton
          variant="rounded"
          width={130}
          height={36}
          sx={{marginRight : 20}}
        />
      </CardActions>
    </Card>
  );
}