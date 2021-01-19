import { ReactThreeTestInstance } from './../types/internal'

import { getMultipleElementsFoundError } from './errors'
import { findAll } from './find'

const queryAllByProp = (prop: string) => (
  sceneTree: ReactThreeTestInstance
) => (id: string) => {
  return Array.from(
    findAll(
      sceneTree,
      (node: ReactThreeTestInstance) => node.props[prop] === id
    )
  )
}

const buildQueries = (
  queryAllBy: ReturnType<typeof queryAllByProp>,
  getMultipleError: (id: string) => string
) => {
  const queryBy = makeSingleQuery(queryAllBy, getMultipleError)

  return [queryBy]
}

// accepts a query and returns a function that throws if more than one element is returned, otherwise
// returns the result or null
const makeSingleQuery = (
  allQuery: ReturnType<typeof queryAllByProp>,
  getMultipleError: (id: string) => string
) => (sceneTree: ReactThreeTestInstance) => (id: string) => {
  const els = allQuery(sceneTree)(id)
  if (els.length > 1) {
    throw getMultipleElementsFoundError(getMultipleError(id))
  }
  return els[0] ?? null
}

export { buildQueries, makeSingleQuery, queryAllByProp }
