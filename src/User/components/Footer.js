import React from 'react';
import { Links } from './UI/Link/Link.style';

function Footer(props) {
    return (
        <footer id="footer">
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div>
                        <h4>Address</h4>
                        <p>
                            F-505, <br />
                            Inovative Plazza<br />
                            New Delhi, India<br /><br />
                            <strong>Phone:</strong> +91 9988776655<br />
                            <strong>Email:</strong> cityhospital@example.com<br />
                        </p>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <Links href="#" className="twitter"><i className="bx bxl-twitter" /></Links>
                    <Links href="#" className="facebook"><i className="bx bxl-facebook" /></Links>
                    <Links href="#" className="instagram"><i className="bx bxl-instagram" /></Links>
                    <Links href="#" className="google-plus"><i className="bx bxl-skype" /></Links>
                    <Links href="#" className="linkedin"><i className="bx bxl-linkedin" /></Links>
                </div>
            </div>
        </footer>

    );
}

export default Footer;