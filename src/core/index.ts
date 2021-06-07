import * as React from 'react'
import ReactThreeTestRenderer, {
  ReactThreeTest,
} from '@react-three/test-renderer'

const renderScene = async (
  el: React.ReactNode,
  opts?: Partial<ReactThreeTest.CreateOptions>
) => {
  return await ReactThreeTestRenderer.create(el, opts)
}

export { renderScene }
