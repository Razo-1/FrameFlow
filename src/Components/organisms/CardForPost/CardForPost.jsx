import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import profile from '../../../assets/image/profile.png'
import { useSelector } from 'react-redux';

export default function MediaCard({item}) {

  let {isDay} = useSelector(state => state.nightMode)


  return (
    <Card sx={{ maxWidth: 345, background : isDay ? '#3c3c3c' : '', color : isDay ? '#E5E5E5' : ''}}>
      <CardMedia
        sx={{ height: 140, }}
        image={item.photos.large ? item.image : profile}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color:  isDay ? '#E5E5E5' : 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{color : isDay ? '#E5E5E5' : ''}} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">view profile</Button>
      </CardActions>
    </Card>
  );
}
