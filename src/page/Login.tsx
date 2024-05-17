import React from 'react';
import OuterLayout from '../components/common/OuterLayout';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import PageTitle from '../components/common/PageTitle';
import LoginPage from '../components/login/LoginPage';

const Login:React.FC = () => {
    return (
        <OuterLayout>
            <PageTitle title="로그인"/>
            <LoginPage/>
           <Footer/>
           <Nav/> 
        </OuterLayout>
    );
};

export default Login;