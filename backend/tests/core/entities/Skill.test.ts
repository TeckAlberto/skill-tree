import { expect } from 'chai'

import { Skill } from '../../../src/core/entities'
import type { SkillStatus } from '../../../src/core/types/SkillStatus'

describe('Entities', () => {
  describe('Skill', () => {
    it('should create a Skill instance with the provided data', () => {
      const skill = new Skill({
        id: 'skill-1',
        title: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        status: 'PENDING' as SkillStatus,
        prerequisites: [],
        technologyId: 'tech-1'
      })

      expect(skill.id).to.equal('skill-1')
      expect(skill.title).to.equal('JavaScript Basics')
      expect(skill.description).to.equal('Learn the fundamentals of JavaScript.')
      expect(skill.status).to.equal('PENDING')
      expect(skill.prerequisites).to.deep.equal([])
      expect(skill.technologyId).to.equal('tech-1')
    })

    it('should create a Skill instance without an ID', () => {
      const skill = new Skill({
        title: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        status: 'PENDING' as SkillStatus,
        prerequisites: [],
        technologyId: 'tech-1'
      })

      expect(skill.title).to.equal('JavaScript Basics')
      expect(skill.description).to.equal('Learn the fundamentals of JavaScript.')
      expect(skill.status).to.equal('PENDING')
      expect(skill.prerequisites).to.deep.equal([])
      expect(skill.technologyId).to.equal('tech-1')
    })

    it('should update the skill status', () => {
      const skill = new Skill({
        id: 'skill-1',
        title: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        status: 'PENDING' as SkillStatus,
        prerequisites: [],
        technologyId: 'tech-1'
      })

      skill.updateStatus('IN_PROGRESS' as SkillStatus)
      expect(skill.status).to.equal('IN_PROGRESS')
    })

    it('should throw an error when accessing id if it is not defined', () => {
      const skill = new Skill({
        title: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        status: 'PENDING' as SkillStatus,
        prerequisites: [],
        technologyId: 'tech-1'
      })

      expect(() => skill.id).to.throw('Missing ID')
    })
  })
})
