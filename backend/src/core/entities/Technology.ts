import { MissingId } from './errors'

interface TechnologyData {
  id?: string
  name: string
  description: string
  iconUrl?: string
  createdAt?: Date
}

class Technology {
  private readonly _id?: string

  readonly name: string
  readonly description: string
  readonly iconUrl?: string
  readonly createdAt: Date

  constructor(data: TechnologyData) {
    this._id = data.id
    this.name = data.name
    this.description = data.description
    this.iconUrl = data.iconUrl
    this.createdAt = data.createdAt ?? new Date()
  }

  get id(): string {
    if (!this._id) {
      throw new MissingId()
    }

    return this._id
  }
}

export default Technology
