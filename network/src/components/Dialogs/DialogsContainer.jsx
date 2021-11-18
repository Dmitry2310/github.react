import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { WithAuthRedirect} from '../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect
)(Dialogs);