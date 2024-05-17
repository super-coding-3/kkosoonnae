import React from 'react';
import OuterLayout from '../components/common/OuterLayout';
import PageTitle from '../components/common/PageTitle';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import KakaoMap from '../components/mylocationstore/KakaoMap';

const MyLocationStore = () => {
    return (
        <OuterLayout>
            <PageTitle title="내 주변 미용실"/>
            <KakaoMap/>
            <Footer/>
            <Nav/>
        </OuterLayout>
    );
};

export default MyLocationStore;