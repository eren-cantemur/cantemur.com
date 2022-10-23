import HeroSection from "../src/components/HeroSection";
import FeatureSection from "../src/components/FeatureSection";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Layout from "../src/containers/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
    </Layout>
  );
}