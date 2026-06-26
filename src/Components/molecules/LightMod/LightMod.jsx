import Switch from '@mui/material/Switch';
import { taskView } from '../../../Store/DayReducer/TaskDay';
import { useDispatch } from 'react-redux';

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

export default function BasicSwitches() {

  let dispatch = useDispatch()

  let handlChang = (e) => {
    dispatch(taskView(e.target.checked))
  }

  return (
    <div>
      <Switch onClick={(e) => handlChang(e)} {...label} />
    </div>
  );
}
