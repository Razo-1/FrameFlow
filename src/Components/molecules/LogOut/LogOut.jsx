import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authTask, leftTask } from '../../../Store/AuthReducer/authTask';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LogOut(){
    let dispatch = useDispatch()
    let {userId,loginPage} = useSelector(state => state.auth)
    let navigation = useNavigate()
    
    useEffect(() => {       
        if(loginPage) navigation('/sigup')
    },[loginPage])

    let changPage = () => {
        dispatch(authTask(null))
        dispatch(leftTask(true))
    }

    return(
        <div onClick={changPage}>
            <LogoutIcon/>
        </div>
    )
}

export { LogOut }