import type { SkillStatus } from '../types/SkillStatus'

import { MissingId } from './errors'

interface SkillData {
  id?: string
  title: string
  description?: string
  status: SkillStatus
  prerequisites: string[]
  technologyId: string
}

class Skill {
  private readonly _id?: string

  readonly title: string
  readonly description?: string
  readonly prerequisites: string[]
  readonly technologyId: string

  status: SkillStatus

  constructor(skillData: SkillData) {
    this._id = skillData.id
    this.title = skillData.title
    this.technologyId = skillData.technologyId
    this.description = skillData.description
    this.prerequisites = skillData.prerequisites

    this.status = skillData.status
  }

  get id(): string {
    if (!this._id) {
      throw new MissingId()
    }

    return this._id
  }

  updateStatus(newStatus: SkillStatus): void {
    this.status = newStatus
  }
}

export default Skill
