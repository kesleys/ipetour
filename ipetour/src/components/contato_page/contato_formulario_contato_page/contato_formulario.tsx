import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./contato_formulario.css";
import type { ContactFormData } from "./contact.types";
import ImagemMachuPicchu from "../../../assets/imagem_machu_picchu_contato_page.webp";

export const ContactForm: FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onBlur", // validação ao perder foco para menos re-renders :contentReference[oaicite:4]{index=4}
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      isWhatsapp: false,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("https://formspree.io/f/mbloobyq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Mensagem enviada com sucesso!");
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="limite_contato_formulario_contato_page">
      <form
        className="contato_formulario"
        onSubmit={handleSubmit(onSubmit)}
        aria-labelledby="contact-form-title"
        role="form"
      >
        {/* Nome */}
        <div className="campo_nome_contato_formulario">
          <input
            id="name"
            type="text"
            placeholder="Nome"
            {...register("name", { required: "*obrigatório" })}
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="mensagem_de_erro_contato_formulario">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <div className="telefone_e_email_contato_formulario">
            {/* Telefone */}
            <div className="campo_telefone_contato_formulario">
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Telefone é obrigatório",
                  validate: (value) =>
                    isValidPhoneNumber(value || "") || "Telefone inválido",
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    id="phone"
                    international
                    defaultCountry="BR"
                    value={value}
                    onChange={onChange}
                    disabled={isSubmitting}
                    placeholder="Número de Telefone"
                  />
                )}
              />
              {errors.phone && (
                <span className="mensagem_de_erro_contato_formulario">
                  {errors.phone.message}
                </span>
              )}
            </div>
            {/* E-mail */}
            <div className="campo_email_contato_formulario">
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: "Formato de email inválido",
                  },
                })}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="mensagem_de_erro_contato_formulario">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          {/* WhatsApp */}
          <div className="numero_de_whatsapp_checkbox_contato_formulario">
            <label htmlFor="isWhatsapp">
              <input
                id="isWhatsapp"
                type="checkbox"
                {...register("isWhatsapp")}
                disabled={isSubmitting}
              />
              Este número é WhatsApp?
            </label>
          </div>
        </div>
        {/* Mensagem */}
        <div className="campo_mensagem_contato_formulario">
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: "Mensagem é obrigatória" })}
            disabled={isSubmitting}
            placeholder="Gostaria de saber mais sobre..."
          />
          {errors.message && (
            <span className="mensagem_de_erro_contato_formulario">
              {errors.message.message}
            </span>
          )}
        </div>
        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="botao_enviar_contato_formulario"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <img
        src={ImagemMachuPicchu}
        alt="Machu Picchu"
        className="imagem_contato_formulário_contato_page"
      />
    </div>
  );
};
