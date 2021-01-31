import {useSession} from '../firebase/userProvider'
import React from 'react'
const Profile = () => {
    const {user} = useSession();
    if (!user) {
        return null;
    }
    return (
        <>
        <p>Name : {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.uid}</p>
        </>
    )
}

export default Profile;