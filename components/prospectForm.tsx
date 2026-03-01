'use client'

import {useActionState} from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect,useTransition, useState } from 'react'
import {z} from 'zod'
import { submitProspect, ProspectFormState } from '@/app/actions/submitProspects'
import Link from 'next/link'

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.fr',
  'hotmail.com', 'hotmail.fr',
  'outlook.com', 'outlook.fr',
  'live.com', 'live.fr',
  'icloud.com', 'me.com',
  'aol.com',
  'laposte.net', 'free.fr',
  'sfr.fr', 'orange.fr',
  'wanadoo.fr', 'protonmail.com',
  'proton.me', 'gmx.com',
];

function isProEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return !!domain && !FREE_EMAIL_DOMAINS.includes(domain);
}

const schema = z.object({
    entreprise: z.string().min(2,"Le nom de l'entreprise doit contenir au moins 2 caractères").max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères"),
    nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    prenom: z.string().min(2, 'Le prenom doit contenir au moins 2 caratères'),
    email: z.string().email('Adresse mail invalide').refine(isProEmail, {
        message: "Veuillez utiliser votre email professionnel"
    }),
    telephone: z.string().min(14,'Le numéro doit contenir 10 chiffres').max(14,'Le numéro doit contenir 10 chiffres').regex(/^\d{2} \d{2} \d{2} \d{2} \d{2}$/, 'Format invalide, ex: 08 07 08 07 08'),
    description: z.string().min(10, 'La description doit contenir au moins 10 caractères').max(500,'La description ne doit pas dépasser 500 caractères'),
});

type FormData = z.infer<typeof schema>;

const initialState: ProspectFormState = {
    success: false,
    message: '',
};

// Composant pour afficher les erreurs sous chaque champ
function FieldError({message}: {message?: string}) {
    if(!message) return null;
    return <p className="mt-1 text-sm text-red-500">{message}</p>;
}

export default function ProspectForm() {
    const [state, formAction, isPending] = useActionState(submitProspect, initialState);
    const [isTransitionPending, startTransition] = useTransition();
    const [showForm, setShowForm] = useState(true);

    const {
        register,
        formState: {errors},
        reset,
        trigger,
        getValues,
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onTouched'
    }); 

    // Réinitialiser le formulaire si succès
   //  Synchroniser les erreurs serveur si échec
   useEffect(() => {
    if (state.success) {
        reset();
        setShowForm(false);
    }
    if (state.errors){
        Object.entries(state.errors).forEach(([field, messages]) => {
            if (messages?.[0]){
                setError(field as keyof FormData, {
                    type: 'serveur',
                    message: messages[0],
                });
            }
        });
    }
   }, [state, reset, setError]);

   // Valider côté client avant d'envoyer au serveur
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await trigger();
    if(!isValid) return;

    const formData = new FormData ();
    const values = getValues();
    Object.entries(values).forEach(([keyof, value]) => {
        formData.append(keyof, value);
    });
    startTransition(() => {
        formAction(formData);
    });
   };

   // Message de succès
   if (!showForm){
    return (
        <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-xl font-semibold text-green-800 mb-2">{state.message}</p>
        
        <Link
          href='/'
          className="mt-6 text-sm text-green-600 underline hover:text-green-800"
        >
          Retourner sur site
        </Link>
      </div>
    );
   }

   const formatPhone = (value: string) => {
  // Garde uniquement les chiffres
  const cleaned = value.replace(/\D/g, '');
  
  // Applique le format XX XX XX XX XX
  const match = cleaned.match(/(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
  
  if (!match) return value;
  
  return [match[1], match[2], match[3], match[4], match[5]]
    .filter(Boolean)
    .join(' ')
    .slice(0, 14); // 10 chiffres + 4 espaces = 14 caractères max
};

   return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Erreur globale serveur */}
      {!state.success && state.message && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {state.message}
        </div>
      )}

      {/* Entreprise */}
      <div>
        <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">
          Entreprise <span className="text-red-500">*</span>
        </label>
        <input
          id="entreprise"
          type="text"
          {...register('entreprise')}
          placeholder="Digital Entreprise"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.entreprise ? 'border-red-400 bg-red-50' : 'border-gray-300'
          }`}
        />
        <FieldError message={errors.entreprise?.message} />
      </div>
      {/* Nom & Prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom du représentant <span className="text-red-500">*</span>
          </label>
          <input
            id="nom"
            type="text"
            {...register('nom')}
            placeholder="Yao"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.nom ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
          <FieldError message={errors.nom?.message} />
        </div>

        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom du représentant <span className="text-red-500">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            {...register('prenom')}
            placeholder="Franck Junior"
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.prenom ? 'border-red-400 bg-red-50' : 'border-gray-300'
            }`}
          />
          <FieldError message={errors.prenom?.message} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="franckjunior.yao@entreprise.net"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
          }`}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone <span className="text-red-500">*</span>
        </label>
        <input
          id="telephone"
          type="tel"
          {...register('telephone', {
            onChange: (e) => {
                 e.target.value = formatPhone(e.target.value);
                }                 
          })}
          placeholder="06 12 34 56 78"
          maxLength={14}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.telephone ? 'border-red-400 bg-red-50' : 'border-gray-300'
          }`}
        />
        <FieldError message={errors.telephone?.message} />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          placeholder="Décrivez vos besoins..."
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
            errors.description ? 'border-red-400 bg-red-50' : 'border-gray-300'
          }`}
        />
        <FieldError message={errors.description?.message} />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={isPending || isTransitionPending}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isPending || isTransitionPending ? 'Envoi en cours...' : 'Envoyer'}
      </button>

    </form>
  );
}