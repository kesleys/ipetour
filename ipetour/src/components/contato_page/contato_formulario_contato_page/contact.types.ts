// src/features/contact/contact.types.ts

export interface ContactFormData {
  /** Nome completo do usuário */
  name: string;

  /** E-mail para contato */
  email: string;

  /** Número de telefone em formato E.164 (ex: "+5511999998888") */
  phone: string;

  /** Indica se o número informado é WhatsApp */
  isWhatsapp: boolean;

  /** Texto livre com a dúvida ou mensagem do usuário */
  message: string;
}
