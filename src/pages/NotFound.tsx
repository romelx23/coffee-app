import React from 'react'
// import notFound from '../assets/animations/404-page-animation.json'
import pageNotFound from '../assets/animations/not-found.json'
import { Layout } from '../components/Layout';
import { LottieComponent } from '../components/Lottie';

export const NotFound = () => {

    return (
        <Layout>
            <div className='flex flex-col items-center mt-10'>
            <LottieComponent
                name='notFound'
                animationData={pageNotFound}
                goTo={300}
                play={true}
                loop={true}
                style={{ width: '100%' , height: 500 }}
            />
            </div>
        </Layout>
    )
}
