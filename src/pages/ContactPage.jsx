import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className='border-double w-100 h-120 border-3 m-auto p-5 mt-15 border-green-800'>
            <b style={{ color: 'green',fontSize: '20px' }}>KhmerFarm : </b>Welcome
            <p>Contact with social media below :</p>
            <li>Facebook : <Link to="https://web.facebook.com/VVst128">Vorn Theavy</Link> </li>
            <li>TikTok : Vorn Theavy</li>
            <li>Telegram : @VyvySt218</li>
            <h1 className='text-center font-bold text-green-800 text-xl mt-5'>Just Fun</h1>
            <Link to="https://web.facebook.com/VVst128">  
            <div className='w-50 h-50 mt-5 flex gap-5'>
                <img className='border-2 ml-5 border-green-800 rounded-2xl' src="https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/482246207_1752702545658295_7950720772526685256_n.jpg?stp=cp6_dst-jpg_p417x417_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHApoUpDaR52sn04exQvK6NLlSHqh8fC1suVIeqHx8LW0ACQK4DPzBECuqjfeGZqjF1RmRbMWIgPBoOZZDFgPtg&_nc_ohc=NcNPTyf9DBQQ7kNvwH613QE&_nc_oc=Adkibl1gzGR4fW8km9H9Nygb-rfmEJwGo9YzDb0DVRGU7u-zgc6rH1e1hyTobr7xYE0&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=GI6a84WCNJNFffL3iuKqVg&oh=00_AfJg2OgQE-JzgwPppgCxMa0MKhSfWeVOxMOG2g8wOApjHQ&oe=683CB05E" alt="" />
                <img className='border-2 border-green-800 rounded-2xl ' src="https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/482301469_1751784779083405_8243663907338758516_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFyjDASHOvtV3c9gELgFGkSLjSL_QaME2guNIv9BowTaJ2zIrXB-FjjNC6PlvrzHSIpS72QYFx69tLoicnmWKyA&_nc_ohc=jzHkzm9cP_oQ7kNvwEycrpR&_nc_oc=AdnS2n6tDe7OGr_GkrUQPYxB0MyGzOTEW56IaQFKXUj1atK_GLrDUBkL2EUc77WEwTY&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=X_-nSkr6HHBvdTqKXZr9OQ&oh=00_AfLAk6dO23pugWs2_Sc3N7ogiz_4IMIYB5PITw18nmh3dw&oe=683CC451" alt="" />
            </div>
            </Link>
        </div>
    );
    
}

export default ContactPage;
