import { defineConfig } from 'prisma/config'

export default defineConfig({
  datasource: {
    url: "postgresql://neondb_owner:npg_2gDjNEv8rLIA@ep-polished-union-amu1tjpp-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
})