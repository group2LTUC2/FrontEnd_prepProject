import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Supporters:</h3>
                            <ul>
                                <li>
                                    <p>LTUC</p>
                                </li>
                                <li>
                                    <p>Digits</p>
                                </li>
                                <li>
                                    <p>ASAC</p>
                                </li>
                            </ul>
                        </div>

                       
                        <div class="col-md-6 item text">
                            <h3>Sadakah Box</h3>
                            <p>
                                Sadakah Box is an idea that we found for the purpose of the project, so that its idea is to give charity during the month of Ramadan with food, money, or clothes, and deliver it to people in need and earn wages
                            </p>
                        </div>

                        <div class="col item social">
                            <h6>Contact Us :</h6>
                            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                                <i class="icon ion-social-facebook"></i>
                            </a>
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <i class="icon ion-social-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/?hl=en" target="_blank">
                                <i class="icon ion-social-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <p class="copyright">CopyRight © 2023</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

