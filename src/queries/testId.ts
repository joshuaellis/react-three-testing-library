import { queryAllByProp, buildQueries } from 'helpers/queryHelpers'

const TYPE = 'testid'
const PROP = `data-${TYPE}`

const getAllByTestId = queryAllByProp(PROP)

const getMultipleError = (id: string): string =>
  `Found multiple elements with the ${TYPE} of: ${id}`

const [getByTestId] = buildQueries(getAllByTestId, getMultipleError)

export { getAllByTestId, getByTestId }
