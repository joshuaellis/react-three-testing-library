import * as React from 'react'

import { renderScene } from '../../index'

describe('toBeType matcher', () => {
  const renderTestByIdScene = () => (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial data-testid="material" />
      </mesh>
    </mesh>
  )

  it('should return true if the type exists', () => {
    const { getByTestId } = renderScene(renderTestByIdScene())

    expect(getByTestId('material')).toBeType('meshBasicMaterial')
  })

  it('should return false if the type does not exist', () => {
    const { getByTestId } = renderScene(renderTestByIdScene())

    const res = () =>
      expect(getByTestId('material')).toBeType('boxBufferGeometry')

    expect(res).toThrow()
  })
})
