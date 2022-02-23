import React from "react";
import { Users } from "./Users";
import { useSelector } from 'react-redux';
import Preloader from "../common/preloader/Preloader";
import { getIsFetching } from '../../redux/user-selector';


type UsersPageType = {}

export const UsersPage: React.FC<UsersPageType> = (props) => {

    const isFetching = useSelector(getIsFetching);

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <Users />
        </>
    )
}