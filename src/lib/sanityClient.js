import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '69tpz6ep',   // 🔹 replace with your real projectId from sanity.config.js
  dataset: 'production',   // 🔹 same dataset you selected
  apiVersion: '2025-08-22', // 🔹 today’s date ensures the latest schema
  useCdn: true,             // 🔹 true = faster, cached responses (set false if you need real-time)
})
