//import style from './ProfileInfo.module.css';
import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileSatusWithHooks: React.FC<PropsType> = (props) => {

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
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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