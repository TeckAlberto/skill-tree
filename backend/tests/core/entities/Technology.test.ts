import { expect } from 'chai'

import { Technology } from '../../../src/core/entities'

describe('Entities', () => {
  describe('Technology', () => {
    const createdAt = new Date()

    it('should create a Technology instance with the provided data', () => {
      const technology = new Technology({
        id: 'tech-1',
        name: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        iconUrl: 'some-icon-url',
        createdAt
      })

      expect(technology.id).to.equal('tech-1')
      expect(technology.name).to.equal('JavaScript Basics')
      expect(technology.description).to.equal('Learn the fundamentals of JavaScript.')
      expect(technology.iconUrl).to.equal('some-icon-url')
      expect(technology.createdAt).to.deep.equal(createdAt)
    })

    it('should create a Technology instance without an ID', () => {
      const technology = new Technology({
        name: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        iconUrl: 'some-icon-url',
        createdAt
      })

      expect(technology.name).to.equal('JavaScript Basics')
      expect(technology.description).to.equal('Learn the fundamentals of JavaScript.')
      expect(technology.iconUrl).to.equal('some-icon-url')
      expect(technology.createdAt).to.deep.equal(createdAt)
    })

    it('should throw an error when accessing id if it is not defined', () => {
      const technology = new Technology({
        name: 'JavaScript Basics',
        description: 'Learn the fundamentals of JavaScript.',
        iconUrl: 'some-icon-url',
        createdAt
      })

      expect(() => technology.id).to.throw('Missing ID')
    })
  })
})
