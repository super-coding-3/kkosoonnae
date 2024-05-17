import React from 'react';
import OuterLayout from '../components/common/OuterLayout';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import PageTitle from '../components/common/PageTitle';

const Login = () => {
    return (
        <OuterLayout>
            <PageTitle title="로그인"/>
           <Footer/>
           <Nav/> 
        </OuterLayout>
    );
};

export default Login;