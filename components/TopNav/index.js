import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
display: flex;
justify-content: space-between;
padding: 0 20px;
background: #222222;
color: #afafaf;
font-size: 12px;
line-height: 40px;
text-transform: uppercase;

ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    li {
        list-style: none;
        a {
            text-decoration: none;
        }
    }
}

.menu {
    padding: 0;
    margin: 0;
    display: flex;
}

.top-menu--separator {
    display: inline-block;
    padding: 0 10px;
}

display: none;

@media (min-width: 900px) {
    display: flex;
}

`;

const TopNav = () => {
    return (
        <StyledSection className="top-menu">
            <div className="left-content">
                <ul>
                    <li>
                        <Link href="/">Newsletter</Link>
                    </li>
                    <span className="top-menu--separator">|</span>
                    <li>
                        <Link href="/">Copyright</Link>
                    </li>
                </ul>
            </div>
            <div className="right-content">
            <ul>
                    <li>
                        <Link href="/">Light</Link>
                    </li>
                    <span className="top-menu--separator">|</span>
                    <li>
                        <Link href="/">Dark</Link>
                    </li>
                </ul>
            </div>
        </StyledSection>
    )
}

export default TopNav;