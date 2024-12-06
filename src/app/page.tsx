import Image from "next/image";
import Header from "@/Components/topHeader";
import Nav from "@/Components/nav"
import Hero from "@/Components/Hero"
import Shop from "@/Components/shop";
import Categories from "@/Components/categories";
import BestProducts from "@/Components/bestProducts";
// import Footer from "@/Components/MyFooter";
import Category from "@/Components/category";
import Product from "../Components/ourProducts"

export default function Home() {
  return (
    <div>

    <Header/>
    <Nav/>
    <Hero/>
    <Shop/>
     <Categories/>
     <BestProducts/>
     <Category/>
     <Product/>
     {/* <Footer/> */}

    </div>
    
  );
}
