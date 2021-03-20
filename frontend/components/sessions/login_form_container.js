import { connect } from "react-redux";
import { login, closeSessionForm } from "../../actions/session_actions";
import SessionForm from './session_form';

const mapStateToProps = ({errors, ui}) => ({
  errors: errors.session,
  modalOpen: ui.modal.sessionForm['login'],
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  closeSessionForm: key => dispatch(closeSessionForm(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);