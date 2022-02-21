import Dialogs from './Dialogs';
import { actions } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

let mapStateToProps = (state: AppStateType) => {
  return {
    messagesPage: state.messagesPage
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {sendMessageCreator: actions.sendMessageCreator}), WithAuthRedirect)(Dialogs);