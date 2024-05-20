import React from 'react';
import OuterLayout from '../components/common/OuterLayout';
import PageTitle from '../components/common/PageTitle';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import KakaoMap from '../components/mylocationstore/KakaoMap';
import StoreList from '../components/mylocationstore/StoreList';
import StyleSlider from '../components/mylocationstore/StyleSlider';

const MyLocationStore = () => {
    return (
        <OuterLayout>
            <PageTitle title="내 주변 미용실"/>
            <KakaoMap/>
            <StoreList/>
        
            <StyleSlider/>
            <Footer/>
            <Nav/>
        </OuterLayout>
    );
};

export default MyLocationStore;