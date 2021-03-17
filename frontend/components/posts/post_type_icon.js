import { withStyles } from '@material-ui/core/styles';
import StopRoundedIcon from '@material-ui/icons/StopRounded';

export const PostTypeIcon = withStyles({
  root: {
    color: {
      primary: "#4353FF",
      secondary: "#F5A623"
    }
  },
})(StopRoundedIcon);