"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitProspect, type ProspectFormState } from "@/app/actions/submitProspects";

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.fr",
  "hotmail.com", "hotmail.fr", "outlook.com", "outlook.fr",
  "live.com", "live.fr", "icloud.com", "me.com", "aol.com",
  "laposte.net", "free.fr", "sfr.fr", "orange.fr", "wanadoo.fr",
  "protonmail.com", "proton.me", "gmx.com",
];

function isProEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && !FREE_EMAIL_DOMAINS.includes(domain);
}

const schema = z.object({
  entreprise: z
    .string()
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères")
    .max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse mail invalide").refine(isProEmail, {
    message: "Veuillez utiliser votre email professionnel",
  }),
  telephone: z
    .string()
    .min(14, "Le numéro doit contenir 10 chiffres")
    .max(14, "Le numéro doit contenir 10 chiffres")
    .regex(/^\d{2} \d{2} \d{2} \d{2} \d{2}$/, "Format invalide, ex: 08 07 08 07 08"),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères")
    .max(500, "La description ne doit pas dépasser 500 caractères"),
});

type FormData = z.infer<typeof schema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

const controlBaseClass =
  "w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand";

const initialState: ProspectFormState = { success: false, message: "" };

export default function ProspectForm() {
  const [state, formAction, isPending] = useActionState(submitProspect, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (!match) return value;
    return [match[1], match[2], match[3], match[4], match[5]]
      .filter(Boolean)
      .join(" ")
      .slice(0, 14);
  };

  if (state.success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center">
        <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
        <p className="mt-4 text-lg font-semibold text-emerald-800">
          {state.message}
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
    <form action={formAction} noValidate className="space-y-5">
      {state.message && !state.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="entreprise" className="mb-1 block text-sm font-medium text-zinc-700">
          Entreprise <span className="text-red-500">*</span>
        </label>
        <input
          id="entreprise"
          type="text"
          {...register("entreprise")}
          name="entreprise"
          placeholder="Digital Entreprise"
          className={`${controlBaseClass} ${
            errors.entreprise || state.errors?.entreprise ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
          }`}
        />
        <FieldError message={errors.entreprise?.message || state.errors?.entreprise?.[0]} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-zinc-700">
            Nom du représentant <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            {...register("nom")}
            name="nom"
            placeholder="Yao"
            className={`${controlBaseClass} ${
              errors.nom || state.errors?.nom ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
            }`}
          />
          <FieldError message={errors.nom?.message || state.errors?.nom?.[0]} />
        </div>

        <div>
          <label htmlFor="prenom" className="mb-1 block text-sm font-medium text-zinc-700">
            Prénom du représentant <span className="text-red-500">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            {...register("prenom")}
            name="prenom"
            placeholder="Franck Junior"
            className={`${controlBaseClass} ${
              errors.prenom || state.errors?.prenom ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
            }`}
          />
          <FieldError message={errors.prenom?.message || state.errors?.prenom?.[0]} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          name="email"
          placeholder="franckjunior.yao@entreprise.net"
          className={`${controlBaseClass} ${
            errors.email || state.errors?.email ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
          }`}
        />
        <FieldError message={errors.email?.message || state.errors?.email?.[0]} />
      </div>

      <div>
        <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-zinc-700">
          Téléphone <span className="text-red-500">*</span>
        </label>
        <input
          id="telephone"
          type="tel"
          {...register("telephone", {
            onChange: (e) => {
              e.target.value = formatPhone(e.target.value);
            },
          })}
          name="telephone"
          placeholder="06 12 34 56 78"
          maxLength={14}
          className={`${controlBaseClass} ${
            errors.telephone || state.errors?.telephone ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
          }`}
        />
        <FieldError message={errors.telephone?.message || state.errors?.telephone?.[0]} />
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium text-zinc-700">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          {...register("description")}
          name="description"
          placeholder="Décrivez vos besoins..."
          className={`${controlBaseClass} resize-none ${
            errors.description || state.errors?.description ? "border-red-300 bg-red-50" : "border-zinc-300 bg-white"
          }`}
        />
        <FieldError message={errors.description?.message || state.errors?.description?.[0]} />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
    </form>
  );
}
