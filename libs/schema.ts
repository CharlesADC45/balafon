import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const prospects = sqliteTable('prospects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  entreprise: text('entreprise').notNull(),
  nom: text('nom').notNull(),
  prenom: text('prenom').notNull(),
  email: text('email').notNull(),
  telephone: text('telephone').notNull(),
  description: text('description').notNull(),
  date_demande: text('date_demande').notNull(),
  client: integer ('client', {mode: 'boolean'}).notNull().default(false),
  date_envoie_demo: text('date_envoie_demo'),
  date_reponse_prospect: text('date_reponse_prospect'),
});

// Type TypeScript généré automatiquement
export type Prospect = typeof prospects.$inferSelect;
export type NewProstect = typeof prospects.$inferInsert;