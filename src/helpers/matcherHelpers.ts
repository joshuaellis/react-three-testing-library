import { ReactThreeTestInstance } from 'types/internal'

import { PrimitiveTypeError } from './errors'

const checkNode = (
  node: ReactThreeTestInstance,
  types: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
) => {
  const checks = types.map((t) => node.type === t)

  if (!checks.includes(true)) {
    throw new PrimitiveTypeError(
      node,
      types,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(args as [any, jest.MatcherContext])
    )
  }
}

export { checkNode }
