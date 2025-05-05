import { useState } from "react";

export default function FormContatoMain() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Remove todos os caracteres não numéricos e limita a 11 dígitos
    const cleaned = rawValue.replace(/\D/g, "").slice(0, 11);

    // Divide o número nas partes correspondentes
    const areaCode = cleaned.slice(0, 2);
    const part1 = cleaned.slice(2, 7);
    const part2 = cleaned.slice(7, 11);

    let formatted = "";

    if (cleaned.length > 10) {
      // Formato para celular: (XX) XXXXX-XXXX
      formatted = `(${areaCode}) ${part1}-${part2}`;
    } else if (cleaned.length > 6) {
      // Formato intermediário durante a digitação
      formatted = `(${areaCode}) ${part1}-${part2}`;
    } else if (cleaned.length > 2) {
      // Formato com DDD e primeira parte
      formatted = `(${areaCode}) ${part1}`;
    } else if (cleaned.length > 0) {
      // Apenas DDD sem fechar parênteses
      formatted = `(${cleaned}`;
    }

    setPhone(formatted);
  };

  return (
    <form>
      <input type="text" placeholder="Nome" />
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Telefone"
        maxLength={15} // Máximo de caracteres considerando a formatação
        pattern="\(\d{2}\) \d{5}-\d{4}" // Validação básica
      />
      <input type="email" placeholder="E-mail" />
      <button type="submit">Enviar</button>
      <br />
      <textarea
        cols={20}
        rows={20}
        placeholder="Quero saber mais sobre..."
        id="sabermais"
      ></textarea>
    </form>
  );
}
