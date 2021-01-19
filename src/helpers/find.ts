import { ReactThreeTestInstance } from '../types/internal'

const findAll = (
  node: ReactThreeTestInstance,
  checker: (node: ReactThreeTestInstance) => boolean
) => {
  let results: ReactThreeTestInstance[] = []

  if (checker(node)) {
    results.push(node)
  }

  node.props.children?.forEach((child: ReactThreeTestInstance) => {
    results.push.apply(results, findAll(child, checker))
  })

  return results
}

export { findAll }
