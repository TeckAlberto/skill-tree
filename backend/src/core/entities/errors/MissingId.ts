import EntityError from './EntityError'

class MissingId extends EntityError {
  constructor() {
    super('Missing ID')
  }
}

export default MissingId
