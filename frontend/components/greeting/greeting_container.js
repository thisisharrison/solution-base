import { connect } from "react-redux";
import Greeting from './greeting';

const mapStateToProps = state => ({
  // currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout())
});

export default connect(null, null)(Greeting);