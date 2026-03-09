import { z } from 'zod'
import { isValid } from 'ulid'

export const UlidSchema = z.string().refine(isValid, {
  message: 'Debe ser un ULID válido'
})

export type Ulid = z.infer<typeof UlidSchema>
