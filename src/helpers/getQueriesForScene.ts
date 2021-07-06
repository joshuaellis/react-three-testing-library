import { Queries, ReactThreeTestInstance } from 'types/internal'

import * as defaultQueries from 'queries/index'

const getQueriesForScene = (sceneTree: ReactThreeTestInstance) =>
  Object.entries(defaultQueries).reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (helpers: { [key: string]: any }, entry: [string, any]) => {
      const [key, fn] = entry
      helpers[key] = fn(sceneTree)
      return helpers
    },
    {}
  ) as Queries

export { getQueriesForScene }
