import { ReactThreeTestInstance } from 'types/internal'

import { findProp } from 'helpers/find'
import { checkNode } from 'helpers/matcherHelpers'

function toHaveMaterial(node: ReactThreeTestInstance, type?: string) {
  checkNode(node, ['mesh', 'instancedMesh'], toHaveMaterial, this)

  const hasMaterial = findProp(node, 'material', type)

  return {
    pass: hasMaterial,
    message: () => {
      const has = hasMaterial ? 'does' : 'does not'
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveMaterial`,
          'element',
          ''
        ),
        '',
        `Received element ${has} have material ${type ? `: ${type}` : ''}:`,
        `  ${this.utils.printReceived(node)}`,
      ].join('\n')
    },
  }
}

export { toHaveMaterial }
