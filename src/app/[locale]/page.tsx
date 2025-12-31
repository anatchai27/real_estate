import AppNavbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BusinessCategories from "@/components/BusinessCategories";
import HomeStyles from "@/components/HomeStyles";
import StatsSection from "@/components/StatsSection";
import RecentProjects from "@/components/RecentProjects";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <main>
        <HeroSection />
        <BusinessCategories />
        <HomeStyles />
        <StatsSection />
        <RecentProjects />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
