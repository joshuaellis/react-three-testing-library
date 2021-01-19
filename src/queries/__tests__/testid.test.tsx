import * as React from 'react'

import { renderScene } from '../../index'

describe('testId queries', () => {
  describe('getTestById', () => {
    const renderTestByIdScene = () => (
      <mesh>
        <boxBufferGeometry data-testid="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial />
        <mesh>
          <boxBufferGeometry data-testid="geometry" args={[1, 1, 1]} />
          <meshBasicMaterial data-testid="mesh" />
        </mesh>
      </mesh>
    )

    it('should find the meshBasicMaterial', () => {
      const { getByTestId } = renderScene(renderTestByIdScene())

      expect(getByTestId('mesh')).toBeTruthy()
    })

    it("should return null if it can't find anything", () => {
      const { getByTestId } = renderScene(renderTestByIdScene())

      expect(getByTestId('material')).toBe(null)
    })

    it('should throw if it finds multiple', () => {
      const { getByTestId } = renderScene(renderTestByIdScene())

      const res = () => getByTestId('geometry')

      const expectedMessage =
        'Found multiple elements with the testid of: geometry\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).'

      expect(res).toThrowError(new Error(expectedMessage))
    })
  })
})
