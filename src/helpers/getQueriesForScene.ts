import { ReactThreeTestInstance } from '../types/internal'

import * as defaultQueries from '../queries'

const getQueriesForScene = (
  sceneTree: ReactThreeTestInstance,
  queries = defaultQueries
) =>
  Object.entries(queries).reduce(
    (helpers: { [key: string]: any }, entry: [string, any]) => {
      const [key, fn] = entry
      helpers[key] = fn(sceneTree)
      return helpers
    },
    {}
  )

export { getQueriesForScene }
