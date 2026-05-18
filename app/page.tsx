import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSearch from "@/components/ProductSearch";
import Products from "@/components/Products";
import Features from "@/components/Features";
import About from "@/components/About";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ProductSearch />
      <Products />
      <Features />
      <About />
      <News />
      <Footer />
    </main>
  );
}
