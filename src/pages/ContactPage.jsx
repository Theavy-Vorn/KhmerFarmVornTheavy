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
            <div className='w-50 h-50 m-auto mt-4'>
              <img src="https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/482031062_1752892712305945_2584568494743291930_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJcOgc0svbxE1vvIZmk2RgcwN7Vf5F2cpzA3tV_kXZyi3_ybrJvkpjSDMXYVDU3q5pRBvHPfpkh2n31aIDexWp&_nc_ohc=8FGnIv7ZurUQ7kNvwFBYLwT&_nc_oc=AdmJ3IpqIvpz_iqhb_z7JC93QMV9setgy_mftzwKdWB_1-yyDVj6n9vk4v4LPP3gemc&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=Npp7zH_mVJ4nn3_rXmHoPQ&oh=00_AfJAI_xaDjReMfdNs0S6HMlN9BrMNA4GUfsF52Em-TCi7w&oe=683CA8EA" alt="" />
            </div>
        </div>
    );
    
}

export default ContactPage;
