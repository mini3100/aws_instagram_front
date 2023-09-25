import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    // accounts로 시작하는 경우 : Signup, Signin
    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            if(authenticated) { // 인증 됐을 경우 : 로그인 성공 -> 메인 화면
                return <Navigate to={"/"}/>
            }
            return element;
        }
    }

    // accounts로 시작하지 않는 경우 : Home
    if(!authenticated) { // 인증 되지 않은 경우 : 로그인 페이지
        return <Navigate to={"/accounts/login"}/>
    }
    return element; // 인증 된 경우
}

export default AuthRoute;