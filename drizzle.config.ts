import type { Config } from 'drizzle-kit'

export default {
    schema: './libs/schema.ts',
    out: './drizzle/migrations',
    dialect: 'sqlite',
    dbCredentials: {
        url: './formulaire.sqlite',
    },
} satisfies Config;