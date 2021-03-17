import { withStyles } from '@material-ui/core/styles';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import IconButton from '@material-ui/core/IconButton';

export const BookmarkOutlinedIcon = withStyles({
  root: {
    color: "#62BCCC",
    fontSize: "1.06rem"
  },
})(BookmarkBorderRoundedIcon);

export const BookmarkFilledIcon = withStyles({
  root: {
    color: "#62BCCC",
    fontSize: "1.06rem"
  },
})(BookmarkRoundedIcon);

export const BookmarkButton = withStyles({
  root: {
    color: "#62BCCC",
    fontSize: "0.75rem"
  }
})(IconButton);
