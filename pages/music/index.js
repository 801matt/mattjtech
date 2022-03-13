import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import HomeLeadText from "../../components/HomeLeadText";
import TopNav from "../../components/TopNav";
import PageHero from "../../components/PageHero";
import Categories from "../../components/Categories";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import PostExcerpt from "../../components/PostExcerpt";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Music - MattJ</title>
      </Head>
      <TopNav />
      <Header />
      <PageHero title="Music" />
      <PageContent>
        <PostExcerpt />
      </PageContent>
      <Categories title="Portfolio" />
      <Footer />
    </>
  );
};

export default AboutPage;
