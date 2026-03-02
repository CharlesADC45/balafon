'use server'

import db from '@/libs/db';
import { prospects } from '@/libs/schema';
import { z } from 'zod';

const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.fr',
  'hotmail.com',
  'hotmail.fr',
  'outlook.com',
  'outlook.fr',
  'live.com',
  'live.fr',
  'icloud.com',
  'me.com',
  'aol.com',
  'laposte.net',
  'free.fr',
  'sfr.fr',
  'orange.fr',
  'wanadoo.fr',
  'protonmail.com',
  'proton.me',
  'gmx.com',
];

function isProEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return !!domain && !FREE_EMAIL_DOMAINS.includes(domain);
}

const schema = z.object({
  entreprise: z
    .string()
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caracteres")
    .max(100, "Le nom de l'entreprise ne peut pas depasser 100 caracteres"),
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caracteres'),
  prenom: z.string().min(2, 'Le prenom doit contenir au moins 2 caracteres'),
  email: z.string().email('Adresse mail invalide').refine(isProEmail, {
    message: 'Veuillez utiliser votre email professionnel',
  }),
  telephone: z
    .string()
    .min(14, 'Le numero doit contenir 10 chiffres')
    .max(14, 'Le numero doit contenir 10 chiffres')
    .regex(/^\d{2} \d{2} \d{2} \d{2} \d{2}$/, 'Format invalide, ex: 08 07 08 07 08'),
  description: z
    .string()
    .min(10, 'La description doit contenir au moins 10 caracteres')
    .max(500, 'La description ne doit pas depasser 500 caracteres'),
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

  const date_demande = new Date().toLocaleString('fr-FR', {
    dateStyle: 'short',
    timeStyle: 'medium',
  });

  try {
    await db.insert(prospects).values({
      entreprise: result.data.entreprise,
      nom: result.data.nom,
      prenom: result.data.prenom,
      email: result.data.email,
      telephone: result.data.telephone,
      description: result.data.description,
      date_demande,
    });

    return {
      success: true,
      message: 'Demande envoyee avec succes !',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Une erreur est survenue. Reessayez.',
    };
  }
}
