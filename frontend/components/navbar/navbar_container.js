import { connect } from "react-redux";
import { logout, showSessionForm } from "../../actions/session_actions"
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  showSessionForm: key => dispatch(showSessionForm(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);