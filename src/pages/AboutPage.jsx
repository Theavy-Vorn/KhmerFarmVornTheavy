import React from 'react';

const AboutPage = () => {
    return (
        <div className='border-dotted w-100 h-120 border-3 m-auto p-5 mt-15 border-green-800'>
            <b style={{ color: 'green',fontSize: '20px' }}>KhmerFarm : </b> was created with a mission to support and empower Cambodian farmers 
            and consumers by connecting them through a trusted online platform.
            In Cambodia, many farmers face challenges in accessing modern markets,
            fair prices, and reliable information. KhmerFarm aims to solve this by providing:
            <li>A digital marketplace for farmers to sell their products directly.</li>
            <li>Access to organic and locally-grown food for consumers.</li>
            <li>Educational resources about sustainable farming and modern techniques.</li>
            <li>A community hub where farmers and customers can communicate, share knowledge, and build trust.</li>
        </div>
    );
}

export default AboutPage;
