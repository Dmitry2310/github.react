import style from './ProfileInfo.module.css';
import React from 'react';

class ProfileSatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    diActivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur= {this.diActivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        );
    }

}

export default ProfileSatus;