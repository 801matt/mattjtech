import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
margin-top: 80px;
color: #888;
background-color: #222222;
height: 260px;
padding: 40px 20px;
text-transform: uppercase;

.footer-content {
    max-width: 1117px;
    margin: 0 auto;
}

.footer-content--top {
    height: 120px;
}

.footer-content--top-title {
    color: white;
}

.footer-content--top-list {
    ul {
        padding: 0;
        li {
            list-style: none;
            a {
                font-size: 14px;
            }
        }
    }
}

.footer-content--bottom {
    border-top: solid .5px rgba(255,255,255,0.2);
    padding: 20px 0;
    font-size: 14px;
    text-transform: initial;
}
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="footer-content">
                <div className="footer-content--top">
                    <div className="footer-content--top-title">
                        Social
                    </div>
                    <div className="footer-content--top-list">
                        <ul>
                            <li>
                                <Link href="https://twitter.com/801matt" target="_blank">Twitter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content--bottom">
                    &copy; Copyright 2022 | mattjtech
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;