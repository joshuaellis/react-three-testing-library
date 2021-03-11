import * as React from 'react'
import ReactThreeTestRenderer from 'react-three-test-renderer'

const renderScene = (el: React.ReactNode) => {
  return ReactThreeTestRenderer.create(el)
}

export { renderScene }
