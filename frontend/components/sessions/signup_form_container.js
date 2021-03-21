import { connect } from "react-redux";
import { signup, closeSessionForm, showSessionForm } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({errors, ui}) => ({
  errors: errors.session,
  modalOpen: ui.modal.sessionForm['signup'],
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  closeSessionForm: key => dispatch(closeSessionForm(key)),
  showSessionForm: () => dispatch(showSessionForm('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);