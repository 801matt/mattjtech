import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

const StyledSection = styled.section`
  max-width: calc(1117px + 40px);
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;

  .portfolio-title {
    padding: 10px;
    padding-bottom: 0;
  }

  .portfolio-display {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 741px) {
    .portfolio-display-item {
      /* width: calc((100% / 3) - 20px); */
      width: 100%;
    }
  }

  @media (min-width: 742px) and (max-width: 900px) {
    .portfolio-display-item {
      width: calc((100% / 2) - 20px);
    }
  }

  @media (min-width: 901px) {
    .portfolio-display-item {
      width: calc((100% / 3) - 20px);
    }
  }

  .portfolio-display-item {
    margin: 10px;
    height: 300px;
    /* background: #EEEEEE; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: white;
    text-transform: uppercase;
  }

  .branding {
    background-image: url("branding_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .design {
    background-image: url("design_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .art {
    background-image: url("art_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .music {
    background-image: url("music_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .code {
    background-image: url("code_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .imagination {
    background-image: url("imagination_thumbnail.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;
const Categories = (props) => {
  return (
    <StyledSection className="portfolio">
      <h2 className="portfolio-title">{props.title}</h2>
      <div className="portfolio-display">
        <Link href="/">
          <a className="portfolio-display-item branding">Branding</a>
        </Link>
        <Link href="/">
          <a className="portfolio-display-item design">Design</a>
        </Link>
        <Link href="/">
          <a className="portfolio-display-item art">Art</a>
        </Link>
        <Link href="/">
          <a className="portfolio-display-item music">Music</a>
        </Link>
        <Link href="/">
          <a className="portfolio-display-item code">Code</a>
        </Link>
        <Link href="/">
          <a className="portfolio-display-item imagination">Imagination</a>
        </Link>
      </div>
    </StyledSection>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
};

Categories.defaultProps = {
  title: "Portfolio",
};

export default Categories;
