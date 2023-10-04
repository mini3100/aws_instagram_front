import React, { useEffect, useState } from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../apis/api/account';

function Signin(props) {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
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

    const handleSigninSubmit = async () => {
        try {
            const response = await signin(account);
            localStorage.setItem("accessToken", "Bearer " + response.data); // Bearer: Access Token의 유형
            window.location.reload();   // AuthRoute를 다시 실행해서 로그인된 조건을 재실행
        } catch(error) {
            setErrorMsg(error.response.data.errorMessage)
        }
    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <Input placeholder={"전화 번호, 사용자이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount}/>
                    <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount}/>
                    <button onClick={handleSigninSubmit} disabled={isAccountValuesEmpty}>로그인</button>
                    <OrBar/>
                    <div>
                        kakao로 로그인
                    </div>
                    <div>
                        {errorMsg}
                    </div>
                </div>
                
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signin;