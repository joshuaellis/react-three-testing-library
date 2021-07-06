import { queryAllByProp, buildQueries } from 'helpers/queryHelpers'

const PROP = `name`

const getAllByName = queryAllByProp(PROP)

const getMultipleError = (id: string): string =>
  `Found multiple elements with the ${PROP} of: ${id}`

const [getByName] = buildQueries(getAllByName, getMultipleError)

export { getAllByName, getByName }
