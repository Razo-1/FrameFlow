import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authTask, leftTask } from '../../../Store/AuthReducer/authTask';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css'

function LogOut(){
    let {userId,loginPage} = useSelector(state => state.auth)
    let {isDay} = useSelector(state => state.nightMode)
    let dispatch = useDispatch()
    let navigation = useNavigate()
    
    useEffect(() => {       
        if(loginPage) navigation('/sigup')
    },[loginPage])

    let changPage = () => {
        dispatch(authTask(null))
        dispatch(leftTask(true))
    }

    return(
        <div className='log-Out' onClick={changPage}>
            <LogoutIcon sx={{color : isDay ? 'white' : ''}}/>
        </div>
    )
}

export { LogOut }