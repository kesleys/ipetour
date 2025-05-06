import { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Substitua a URL pela sua API real
      await axios.post("https://formspree.io/f/mbloobyq", formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "200px auto", padding: "20px" }}>
      <h2>Fale Conosco!</h2>

      {submitSuccess ? (
        <div style={{ color: "green", margin: "20px 0" }}>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            margin: "60px auto",
          }}
        >
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "0.9em" }}>
                {errors.name}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "0.9em" }}>
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              style={{ width: "100%", padding: "8px", minHeight: "150px" }}
            />
            {errors.message && (
              <span style={{ color: "red", fontSize: "0.9em" }}>
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "10px 20px",
              backgroundColor: isSubmitting ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      )}
    </div>
  );
};
