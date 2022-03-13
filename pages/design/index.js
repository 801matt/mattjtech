import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import HomeLeadText from "../../components/HomeLeadText";
import TopNav from "../../components/TopNav";
import PageHero from "../../components/PageHero";
import Categories from "../../components/Categories";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Design - MattJ</title>
      </Head>
      <TopNav />
      <Header />
      <PageHero title="Design" />
      <PageContent></PageContent>
      <Categories title="Portfolio" />
      <Footer />
    </>
  );
};

export default AboutPage;
