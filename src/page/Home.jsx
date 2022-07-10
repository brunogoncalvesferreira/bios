import {} from "react-icons/";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import "./styles.css";

function Home() {
  return (
    <div className="App">
      <main className="app-main">
        <section className="image-content">
          <img src="https://github.com/brunogoncalvesferreira.png" alt="Foto do meu github"/>
               <p>Bruno Gonçalves Ferreira</p>
        </section>
        <section className="bios-content">
          <a href="https://www.linkedin.com/in/bruno-gon%C3%A7alves-ferreira-9a4793184/" target={"_black"}>Linkedin<FaLinkedin /></a>
          <a href="https://www.instagram.com/brunogonferreira/" target={"_blank"}>Instagram<FaInstagram /></a>
         <a href="https://twitter.com/BrunoGoferreir" target={"_blank"}>Twitter<FaTwitter /></a>
          <a href="https://www.facebook.com/bruno.goncalves.180625/" target={"_blank"}>Facebook<FaFacebook /></a>
        </section>
        <footer className="footer-page">
          <span>
            Feito de <FaHeart color="green" /> pelo Bruno Gonçalves Ferreira
          </span>
        </footer>
      </main>
    </div>
  );
}
export default Home;
