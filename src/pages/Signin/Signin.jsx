import React, { useEffect, useState } from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';

function Signin(props) {
    const navigate = useNavigate();
    const emptyAccount = {
        phoneAndEmailAndUsername: "",
        password: ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("")
    
    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes("")) 
    }, [account])

    return (
        <SigninAndUpLayout>
            <Top>
                <Input placeholder={"전화 번호, 사용자이름 또는 이메일"} name={"phoneAndEmailAndUsername"} changeAccount={changeAccount}/>
                <Input placeholder={"비밀번호"} type={"password"} name={"password"} changeAccount={changeAccount}/>
                <button disabled={isAccountValuesEmpty}>로그인</button>
                <OrBar/>
                <div>
                    kakao로 로그인
                </div>
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signin;