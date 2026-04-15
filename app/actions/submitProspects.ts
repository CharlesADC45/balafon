'use server';

import { z } from 'zod';
import { sendEmail } from '@/libs/resend';
import { buildDemoRequestEmail } from '@/libs/email-template';

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.fr',
  'hotmail.com', 'hotmail.fr', 'outlook.com', 'outlook.fr',
  'live.com', 'live.fr', 'icloud.com', 'me.com', 'aol.com',
  'laposte.net', 'free.fr', 'sfr.fr', 'orange.fr', 'wanadoo.fr',
  'protonmail.com', 'proton.me', 'gmx.com',
];

function isProEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return !!domain && !FREE_EMAIL_DOMAINS.includes(domain);
}

const schema = z.object({
  entreprise: z
    .string()
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères")
    .max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse mail invalide').refine(isProEmail, {
    message: 'Veuillez utiliser votre email professionnel',
  }),
  telephone: z
    .string()
    .min(14, 'Le numéro doit contenir 10 chiffres')
    .max(14, 'Le numéro doit contenir 10 chiffres')
    .regex(/^\d{2} \d{2} \d{2} \d{2} \d{2}$/, 'Format invalide, ex: 08 07 08 07 08'),
  description: z
    .string()
    .min(10, 'La description doit contenir au moins 10 caractères')
    .max(500, 'La description ne doit pas dépasser 500 caractères'),
});

export type ProspectFormState = {
  success: boolean;
  message: string;
  errors?: {
    entreprise?: string[];
    nom?: string[];
    prenom?: string[];
    email?: string[];
    telephone?: string[];
    description?: string[];
  };
};

export async function submitProspect(
  _prevState: ProspectFormState,
  formData: FormData,
): Promise<ProspectFormState> {
  const rawData = {
    entreprise: formData.get('entreprise') as string,
    nom: formData.get('nom') as string,
    prenom: formData.get('prenom') as string,
    email: formData.get('email') as string,
    telephone: formData.get('telephone') as string,
    description: formData.get('description') as string,
  };

  const result = schema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Veuillez corriger les erreurs.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  const date = new Date().toLocaleString('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  try {
    const res = await sendEmail({
      from: 'BALAFON <noreply@africadigitalconnect.net>',
      to: ['info@africadigitalconnect.net'],
      cc: [
        'france.baissy@africadigitalconnect.net',
        'c.ameyao@africadigitalconnect.net',
        'edmond.koffi@africadigitalconnect.net',
      ],
      replyTo: result.data.email,
      subject: `Demande de démo BALAFON — ${result.data.entreprise}`,
      html: buildDemoRequestEmail({
        entreprise: result.data.entreprise,
        nom: result.data.nom,
        prenom: result.data.prenom,
        email: result.data.email,
        telephone: result.data.telephone,
        description: result.data.description,
        date,
      }),
    });

    if (!res.success) {
      console.error('Email send error:', res.error);
      return {
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Réessayez.",
      };
    }

    return {
      success: true,
      message: 'Votre demande de démo a été envoyée avec succès ! Nous vous répondrons sous 24h.',
    };
  } catch (err) {
    console.error('Email send error:', err);
    return {
      success: false,
      message: "Une erreur est survenue. Réessayez ou contactez-nous directement.",
    };
  }
}
