import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Footer = () => {
    return (
        <div>

            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 my-2 mx-auto mb-4 text-success">

                                <h6 className="text-uppercase fw-bold mb-4">rocket express</h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugit numquam aperiam odit tempora veritatis.
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 my-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-success">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 my-2 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-success">
                                    Contact
                                </h6>
                                <p><LocationCityIcon /> New York, NY 10012, US</p>
                                <p className='text-success'> <EmailIcon /> info@example.com </p>
                                <p className='text-success'> <PhoneIcon /> + 01 234 567 88</p>
                                <p className='text-success'> <PhoneIcon /> + 01 234 567 88</p>

                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © {new Date().getFullYear()} Rocket Express

                </div>

            </footer>

        </div>
    );
};

export default Footer;