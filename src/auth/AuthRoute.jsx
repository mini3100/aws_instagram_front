import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import { useQuery } from 'react-query';
import Loading from '../components/Loading/Loading';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];

    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 0,
        refetchOnWindowFocus: false     // 윈도우 포커스 됐을 때 refetch 안 되도록
    });

    if(authenticateState.isLoading) {
        console.log("로딩중...")
        return <Loading />
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"}/>;
    }

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"}/>
        }
    }

    return element;
}

export default AuthRoute;