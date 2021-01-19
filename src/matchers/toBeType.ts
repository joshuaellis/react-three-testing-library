import { ReactThreeTestInstance } from 'types/internal'

function toBeType (node: ReactThreeTestInstance, type: string) {
  const isType = node.type === type
  return {
    pass: isType,
    message: () => {
      const is = isType ? 'is' : 'is not'
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeType`,
          'element',
          ''
        ),
        '',
        `Received element ${is} type ${type}:`,
        `  ${this.utils.printReceived(node)}`
      ].join('\n')
    }
  }
}

export { toBeType }
