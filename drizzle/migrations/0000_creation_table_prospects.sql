CREATE TABLE `prospects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`entreprise` text NOT NULL,
	`nom` text NOT NULL,
	`prenom` text NOT NULL,
	`email` text NOT NULL,
	`telephone` text NOT NULL,
	`description` text NOT NULL,
	`date_demande` text NOT NULL,
	`client` integer DEFAULT false NOT NULL,
	`date_envoie_demo` text,
	`date_reponse_prospect` text
);
