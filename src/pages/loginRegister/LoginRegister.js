import React, { useRef, useState } from 'react';
import { registerApi } from '../api/api_auth';
import useStyle from './styles';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const RegisterLogin = () => {
    const classes = useStyle();
    const [nameRegiser, setNameRegiser] = useState();
    const [userNameRegiser, setUserNameRegiser] = useState();
    const [passRegiser, setPassRegiser] = useState();
    const [confPassRegiser, setConfPassRegiser] = useState();

    const location = useLocation();


    const inputsValidate = () => {
        if (!nameRegiser)
            return toast.warn('نام را وارد کنید');
        if (!userNameRegiser)
            return toast.warn('نام کاربری را وارد کنید');
        if (!passRegiser)
            return toast.warn('پسورد را وارد کنید');
    }

    const onRegister = () => {

        const user = {
            name: nameRegiser,
            username: userNameRegiser,
            password: passRegiser,
            // confPasswordRegister: confPassRegiser
        }
        // const error = validateRegister();
        inputsValidate();
        if (nameRegiser && userNameRegiser && passRegiser)
            registerApi(user, (isOk, data) => {
                if (!isOk)
                    return toast.error(data);
                toast.success('شما با موفقیت ثبت نام شدید');
                localStorage.setItem('name', data.name);
                localStorage.setItem('username', data.name);
                localStorage.setItem('image', data.name);
                localStorage.setItem('x-auth-token', data['x-auth-token']);
                window.location.reload();
            })
    }
    return <div className={classes.registeration}>
        <label>نام</label>
        <input style={{ margin: 'auto' }} value={nameRegiser} onChange={e => setNameRegiser(e.target.value)} />
        <label>نام کاربری</label>
        <input style={{ margin: 'auto' }} value={userNameRegiser} onChange={e => setUserNameRegiser(e.target.value)} />
        <label>رمز عبور</label>
        <input style={{ margin: 'auto' }} value={passRegiser} onChange={e => setPassRegiser(e.target.value)} />
        {/* <label>تکرار رمز عبور</label>
        <input style={{ margin: 'auto' }} type="text" ref={nameRef} value={confPassRegiser} onChange={e => setConfPassRegiser(e.target.value)} /> */}
        <button onClick={onRegister}>ثبت نام </button>
    </div>

}

export default RegisterLogin;