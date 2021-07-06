import * as React from 'react'

import { renderScene } from '../../index'

describe('type queries', () => {
  const TestScene = () => (
    <mesh>
      <boxBufferGeometry name="my-geometry" args={[1, 1, 1]} />
      <meshBasicMaterial />
      <mesh>
        <boxBufferGeometry name="my-geometry" args={[1, 1, 1]} />
        <meshStandardMaterial name="my-material" />
      </mesh>
    </mesh>
  )

  describe('getByType', () => {
    it('should find the meshBasicMaterial', async () => {
      const { getByType } = await renderScene(<TestScene />)

      expect(getByType('MeshStandardMaterial')).toBeTruthy()
    })

    it("should return null if it can't find anything", async () => {
      const { getByType } = await renderScene(<TestScene />)

      expect(getByType('MeshPhongMaterial')).toBe(null)
    })

    it('should throw if it finds multiple', async () => {
      const { getByType } = await renderScene(<TestScene />)

      const res = () => getByType('Mesh')

      const expectedMessage =
        'Found multiple elements with the type of: Mesh\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByName`)).'

      expect(res).toThrowError(new Error(expectedMessage))
    })
  })

  describe('getAllByName', () => {
    it('should find the geometries', async () => {
      const { getAllByType } = await renderScene(<TestScene />)

      expect(getAllByType('BoxGeometry')).not.toEqual([])
    })

    it("should return [] if it can't find anything", async () => {
      const { getAllByType } = await renderScene(<TestScene />)

      expect(getAllByType('MeshPhongMaterial')).toEqual([])
    })
  })
})
