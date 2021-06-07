import { ReactThreeTestInstance } from 'types/internal'

import { PrimitiveTypeError } from './errors'

const checkNode = (
  node: ReactThreeTestInstance,
  types: string[],
  ...args: any[]
) => {
  const checks = types.map((t) => node.type === t)

  if (!checks.includes(true)) {
    throw new PrimitiveTypeError(
      node,
      types,
      ...(args as [any, jest.MatcherContext])
    )
  }
}

export { checkNode }
