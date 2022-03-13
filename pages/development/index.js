import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import HomeLeadText from "../../components/HomeLeadText";
import TopNav from "../../components/TopNav";
import PageHero from "../../components/PageHero";
import Categories from "../../components/Categories";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <>
      <TopNav />
      <Header />
      <PageHero title="Development" />
      <PageContent>
        <section className="home-banner-text">
          <div className="home-banner-text-content"></div>
        </section>
      </PageContent>
      <Categories title="Portfolio" />
      <Footer />
    </>
  );
};

export default AboutPage;
