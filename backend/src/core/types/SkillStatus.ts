enum SKILL_STATUS {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

type SkillStatus = `${SKILL_STATUS}`

export type { SkillStatus }
export { SKILL_STATUS }
