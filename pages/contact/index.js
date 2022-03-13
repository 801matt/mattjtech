import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import HomeLeadText from "../../components/HomeLeadText";
import TopNav from "../../components/TopNav";
import PageHero from "../../components/PageHero";
import Categories from "../../components/Categories";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Head from "next/head";

const StyledSection = styled.section`
  font-size: 16px;
  input {
    height: 40px;
    margin-top: 20px;
  }

  input,
  textarea {
    appearance: none;
    border: none;
    background: #eee;
  }

  button {
    margin-top: 15px;
    appearance: none;
    background: black;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }

  input {
    font-size: 14px;
    padding: 0 12px;
  }

  textarea {
    font-size: 14px;
    padding: 12px;
    margin-top: 20px;
  }

  .contact-form--form {
    width: 100%;
  }

  .form-input--split-half {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .form-input--split-half--left {
    width: 50%;
    input {
      width: 100%;
    }
  }
  .form-input--split-half--right {
    width: 50%;
    margin-left: 20px;
    input {
      width: 100%;
    }
  }
  .form-input--full {
    width: 100%;
  }
  .form-input--full input,
  textarea,
  button {
    width: 100%;
  }
  .btn-align {
    display: flex;
    justify-content: end;
  }
  .btn-right {
    width: 187px;
    height: 40px;
  }

  @media (max-width: 741px) {
    input {
      font-size: 16px;
    }
    textarea {
      font-size: 16px;
    }
    .form-input--split-half {
      display: block;
      width: 100%;
    }

    .form-input--split-half--left {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .form-input--split-half--right {
      width: 100%;
      margin: 0;
      input {
        width: 100%;
      }
    }
  }
`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Contact - MattJ</title>
      </Head>
      <TopNav />
      <Header />
      <PageHero title="Contact" />
      <PageContent>
        <StyledSection className="contact-page">
          <div className="contact-form">
            <div className="contact-form--text">
              <h2>Contact Me</h2>
            </div>
            <div className="contact-form--form">
              <div className="form-input--split-half">
                <div className="form-input--split-half--left">
                  <input type="text" placeholder="Name *" />
                </div>
                <div className="form-input--split-half--right">
                  <input type="text" placeholder="Subject *" />
                </div>
              </div>
              <div className="form-input--full">
                <input type="email" placeholder="Email *" />
              </div>
              <div className="form-input--full">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className="form-input--full btn-align">
                <button className="btn-right">Send Message</button>
              </div>
            </div>
          </div>
        </StyledSection>
      </PageContent>
      <Categories title="Portfolio" />
      <Footer />
    </>
  );
};

export default AboutPage;
