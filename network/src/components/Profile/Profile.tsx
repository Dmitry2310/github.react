import { ProfileType } from '../../redux/types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

type PropsType = {
    isOwner: boolean,
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                updateStatus={props.updateStatus} savePhoto={props.savePhoto} 
                saveProfile={props.saveProfile} />
            <MyPostsContainer />
        </div>);
}

export default Profile;