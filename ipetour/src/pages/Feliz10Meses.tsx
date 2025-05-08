/* CongratulationsPage.jsx */
import "./Feliz10Meses.css";
import sunflower from "../assets/sunflower.jpg";

export default function CongratulationsPage() {
  return (
    <div className="congrats-container">
      <div className="sunflower-bg">
        <img src={sunflower} alt="Sunflower" className="sunflower-img" />
      </div>
      <div className="message-overlay">
        <h1 className="big-message">Feliz 10 meses, Minha Pretita</h1>
        <p className="subtext">
          Eu te amo MUUUUITO!
        </p>
      </div>
    </div>
  );
}
