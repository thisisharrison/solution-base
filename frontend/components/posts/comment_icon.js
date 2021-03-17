import { withStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

export const StyledChatBubble = withStyles({
  root: {
    color: "#62BCCC",
    fontSize: "1.06rem"
  },
})(ChatBubbleOutlineRoundedIcon);