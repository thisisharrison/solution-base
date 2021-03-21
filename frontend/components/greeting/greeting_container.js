import { connect } from "react-redux";
import { demo } from "../../actions/session_actions";
import { closeGreeting } from '../../actions/greeting_actions';
import Greeting from './greeting';

const mapStateToProps = ({ui}) => ({
  demo: ui.greeting.demo,
  intro: ui.greeting.intro
});

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demo()),
  closeGreeting: () => dispatch(closeGreeting())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);