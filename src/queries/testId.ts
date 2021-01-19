import { queryAllByProp, buildQueries } from '../helpers/queryHelpers'

const TYPE = 'testid'
const PROP = `data-${TYPE}`

const queryAllByTestId = queryAllByProp(PROP)

const getMultipleError = (id: string): string =>
  `Found multiple elements with the ${TYPE} of: ${id}`

const [getByTestId] = buildQueries(queryAllByTestId, getMultipleError)

export { queryAllByTestId, getByTestId }
