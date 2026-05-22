import Header           from "@/components/Header";
import Hero             from "@/components/Hero";
import Reassurance      from "@/components/Reassurance";
import Products         from "@/components/Products";
import TopMarques       from "@/components/TopMarques";
import Categories       from "@/components/Categories";
import ProSection       from "@/components/ProSection";
import Benefits         from "@/components/Benefits";
import Brands           from "@/components/Brands";
import ComparisonTable  from "@/components/ComparisonTable";
import ConsigneProcess  from "@/components/ConsigneProcess";
import FAQ              from "@/components/FAQ";
import TopPiecesMarques from "@/components/TopPiecesMarques";
import Blog             from "@/components/Blog";
import Temoignages      from "@/components/Temoignages";
import Footer           from "@/components/Footer";
import HomePopup        from "@/components/HomePopup";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff" }}>
      <Header />
      <Hero />
      <Reassurance />
      <Products />
      <TopMarques />
      <Categories />
      <ProSection />
      <Benefits />
      <Brands />
      <ComparisonTable />
      <ConsigneProcess />
      <FAQ />
      <TopPiecesMarques />
      <Blog />
      <Temoignages />
      <Footer />
      <HomePopup />
    </main>
  );
}
