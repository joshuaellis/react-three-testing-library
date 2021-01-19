import * as React from 'react'

import { renderScene } from '../../index'

describe('toHaveMaterial matcher', () => {
  const renderToHaveMaterialScene = () => (
    <mesh data-testid="mesh">
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhongMaterial data-testid="material" />
      </mesh>
    </mesh>
  )

  it('should return true if no material is passed but there is one present', () => {
    const { getByTestId } = renderScene(renderToHaveMaterialScene())

    expect(getByTestId('mesh')).toHaveMaterial()
  })

  it('should return true if a material is passed and is present in the mesh', () => {
    const { getByTestId } = renderScene(renderToHaveMaterialScene())

    expect(getByTestId('mesh')).toHaveMaterial('meshBasicMaterial')
  })

  it('should return false if non-mesh primitive is passed', () => {
    const { getByTestId } = renderScene(renderToHaveMaterialScene())

    const res = () => expect(getByTestId('material')).toHaveMaterial()

    expect(res).toThrow()
  })

  it('should return false if the material is not found', () => {
    const { getByTestId } = renderScene(renderToHaveMaterialScene())

    const res = () =>
      expect(getByTestId('mesh')).toHaveMaterial('meshStandardMaterial')

    expect(res).toThrow()
  })

  it('should return if there are multiple materials found', () => {
    const { getByTestId } = renderScene(
      <mesh data-testid="mesh">
        <meshBasicMaterial />
        <meshPhongMaterial />
      </mesh>
    )

    const res = () => expect(getByTestId('mesh')).toHaveMaterial()

    expect(res).toThrow()
  })
})
