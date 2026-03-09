import { pgTable, text, pgEnum } from 'drizzle-orm/pg-core'

export const skillStatusEnum = pgEnum('skill_status', ['PENDING', 'IN_PROGRESS', 'COMPLETED'])

export const skills = pgTable('skills', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  status: skillStatusEnum('status').notNull().default('PENDING'),
  technologyId: text('technology_id').notNull(),
  prerequisites: text('prerequisites').array().notNull().default([])
})
