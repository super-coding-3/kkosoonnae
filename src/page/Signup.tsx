import React from 'react';
import OuterLayout from '../components/common/OuterLayout';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import PageTitle from '../components/common/PageTitle';
import SignUpPage from '../components/signup/SignUpPage';

const Signup:React.FC = () => {
    return (
        <OuterLayout>
            <PageTitle title={"회원가입"}/>
            <SignUpPage/>
            <Footer/>
            <Nav/>
        </OuterLayout>
    );
};

export default Signup;
