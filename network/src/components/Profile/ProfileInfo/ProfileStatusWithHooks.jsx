//import style from './ProfileInfo.module.css';
import React, { useState, useEffect } from 'react';

const ProfileSatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const diActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <div onDoubleClick={activateEditMode}>{props.status || 'No status'}</div>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={diActivateEditMode}
                        value={status} />
                </div>
            }
        </div>
    );
}

export default ProfileSatusWithHooks;