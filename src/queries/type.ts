import { queryAllByType, buildQueries } from 'helpers/queryHelpers'

const PROP = `type`

const getAllByType = queryAllByType()

const getMultipleError = (id: string): string =>
  `Found multiple elements with the ${PROP} of: ${id}`

const [getByType] = buildQueries(getAllByType, getMultipleError)

export { getAllByType, getByType }
