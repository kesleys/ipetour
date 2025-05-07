import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { ContactForm } from "../components/contato_page/contato_formulario_contato_page/contato_formulario";
import MapaContatoPage from "../components/contato_page/mapa_contato_page/mapa_contato_page";

export default function ContatoPage() {
  return (
    <div>
      <Header />
      <ContactForm />
      <MapaContatoPage />
      <Footer />
    </div>
  );
}
