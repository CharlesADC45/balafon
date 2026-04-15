"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne doit pas dépasser 1000 caractères"),
});

type FormData = z.infer<typeof schema>;

const DESTINATION_EMAIL = "mohamed.tangora@africadigitalconnect.net";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

const controlBaseClass =
  "w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
    trigger,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;

    const { nom, email, sujet, message } = getValues();

    const subject = encodeURIComponent(`Contact BALAFON – ${sujet}`);
    const body = encodeURIComponent(
      `Bonjour,\n\n` +
      `Nouveau message depuis le formulaire de contact BALAFON.\n\n` +
      `Nom : ${nom}\n` +
      `Email : ${email}\n` +
      `Sujet : ${sujet}\n\n` +
      `Message :\n${message}\n`
    );

    window.location.href = `mailto:${DESTINATION_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center">
        <p className="text-lg font-semibold text-emerald-800">
          Votre application mail s&apos;est ouverte. Vérifiez et envoyez le mail pour finaliser votre message.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex text-sm font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
        >
          Retourner sur le site
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-nom" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-nom"
          type="text"
          {...register("nom")}
          placeholder="Votre nom"
          className={`${controlBaseClass} ${
            errors.nom ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white dark:border-zinc-700"
          }`}
        />
        <FieldError message={errors.nom?.message} />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          placeholder="votre@email.com"
          className={`${controlBaseClass} ${
            errors.email ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white dark:border-zinc-700"
          }`}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="contact-sujet" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Sujet <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-sujet"
          type="text"
          {...register("sujet")}
          placeholder="Objet de votre message"
          className={`${controlBaseClass} ${
            errors.sujet ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white dark:border-zinc-700"
          }`}
        />
        <FieldError message={errors.sujet?.message} />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          placeholder="Décrivez votre besoin ou votre question..."
          className={`${controlBaseClass} resize-none ${
            errors.message ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white dark:border-zinc-700"
          }`}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Envoyer le message
      </button>
    </form>
  );
}
