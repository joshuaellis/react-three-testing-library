import { ReactThreeTestInstance } from '../types/internal'

import { getMultipleElementsFoundError } from './errors'

const queryAllByProp =
  (prop: string) => (sceneTree: ReactThreeTestInstance) => (id: string) =>
    Array.from(sceneTree.findAllByProps({ [prop]: id }))

const queryAllByType =
  () => (sceneTree: ReactThreeTestInstance) => (type: string) =>
    Array.from(sceneTree.findAllByType(type))

const buildQueries = (
  queryAllBy: ReturnType<typeof queryAllByProp | typeof queryAllByType>,
  getMultipleError: (id: string) => string
) => {
  const queryBy = makeSingleQuery(queryAllBy, getMultipleError)

  return [queryBy]
}

// accepts a query and returns a function that throws if more than one element is returned, otherwise
// returns the result or null
const makeSingleQuery =
  (
    allQuery: ReturnType<typeof queryAllByProp>,
    getMultipleError: (id: string) => string
  ) =>
  (sceneTree: ReactThreeTestInstance) =>
  (id: string) => {
    const els = allQuery(sceneTree)(id)
    if (els.length > 1) {
      throw getMultipleElementsFoundError(getMultipleError(id))
    }
    return els[0] ?? null
  }

export { buildQueries, makeSingleQuery, queryAllByProp, queryAllByType }
