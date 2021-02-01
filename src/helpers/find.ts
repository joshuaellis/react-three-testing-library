import { ReactThreeTestInstance } from '../types/internal'

import { getMultipleElementsFoundError } from './errors'

const findAll = (
  node: ReactThreeTestInstance,
  checker: (node: ReactThreeTestInstance) => boolean
) => {
  let results: ReactThreeTestInstance[] = []

  const res = node.findAll((node) => {
   console.log(node.children)
    // if(node.props.renderer && node.props.container){
    //   console.log(node.children)
    // }
    // return 'mesh' === node.props.testId
    return false
  })

  console.log('RES',res)

  // if (checker(node)) {
  //   results.push(node)
  // }

  // console.log('PROPS CHILDREN',node.props.children)

  // node.props.children.forEach((child: any) => {
  //   if (typeof child === 'string') {
  //     console.log('FINDALL',child)
  //     return;
  //   }
  //   console.log(child)
  //   console.log(child.props)
  //   results.push.apply(results, findAll(child, checker))
  // })

  return results
}

const findProp = (
  node: ReactThreeTestInstance,
  prop: string,
  expectedValue?: string
) => {
  let regexp = new RegExp(prop)
  let result = expectedValue
    ? node.props[prop] === expectedValue
    : Boolean(node.props[prop])

  if (!result) {
    const childrenResults = Array.from<ReactThreeTestInstance>(
      node.props.children
    )
      .map((child: ReactThreeTestInstance) =>
        expectedValue
          ? child.type.toString() === expectedValue
          : regexp.test(child.type.toString().toLowerCase())
      )
      .filter((bool: boolean) => Boolean(bool))

    if (childrenResults.length > 1) {
      throw getMultipleElementsFoundError(
        `Found multiple ${prop} props, there should only be one.`
      )
    } else {
      result = childrenResults[0]
    }
  }
  return result
}

export { findAll, findProp }
