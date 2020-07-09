import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {



    render() {
        return (

            <div>

                {/*
                    <div className='fullscreean-video-wrap'>
                        <video src='/stockvideo.mp4'
                            autoPlay='true'
                            loop='true'> */}

                {/* </video>
                    </div> */}
                <div>
                    <p className='maintitle'>Debre Tsion Kedest Mariam Eritrean Orthodox Tewahedo Church Atlanta, Georgia.</p>
                </div>

                <div className='showcase'>
                    <p className='showcase-text'>"Orthodoxy is what Christ taught,
                    <br />
                    the Apostles preached,
                    <br /> and the Fathers Kept." 
                    <br/> <span className='qout'> -St. Athanasius</span></p>

                </div>

                <div className='main-body'>
                    <div className='payment-container'>
                        <div className='donation'>Donation</div>
                        <div className='memb-payment'>Member's Payment</div>
                    </div>

                    <div className='about-container'>
                            <h1 className='title'>Who We Are</h1>
                            <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                            popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            .</p>
                    </div>
                </div>



                <div className='footer-container'>
                    <div className='sections'>
                        <h3 className='contact-info-title'>Contact Info.</h3>
                        <div className='contact-info'>3435 Midway Rd.</div>
                        <div className='contact-info'>Decatur, GA 30032</div>
                        <div className='contact-info'>kidist.mariam.eoc@gmail.com</div>
                        <div className='contact-info'>(770) 873-3068</div>
                    </div>

                    <div className='sections'>
                        <h3 className='contact-info-title'>Important Sites</h3>
                        <div><a className='important-sites' href='https://lisantewahdo.org/'>Eritrean Orthodox Tewahedo Patriarchate</a></div>
                        <div><a className='important-sites' href='https://eritreantewahdo.org/'>Eritrean Orthodox Tewahedo Church Diocese of U.S.A and Canada</a></div>
                        <div><a className='important-sites' href='https://english.eritreantewahdo.org/'>Eritrean Orthodox Tewahedo Church Diocese of U.S.A and Canada Web Site In English</a></div>
                    </div>

                    {/* <div className='sections'>
                        <h4 className='title'>Section-3</h4>
                        <p>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                            </p>
                    </div> */}

                    
                </div>
                <footer className='copy-right'>
                        <p className='copy-right-p'> Debre Tsion Kedest Mariam,  Copyright &copy; 2020</p>

                    </footer>
            </div>

        )
    }
}
