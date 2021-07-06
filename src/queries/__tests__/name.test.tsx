import * as React from 'react'

import { renderScene } from '../../index'

describe('name queries', () => {
  const TestScene = () => (
    <mesh>
      <boxBufferGeometry name="my-geometry" args={[1, 1, 1]} />
      <meshBasicMaterial />
      <mesh>
        <boxBufferGeometry name="my-geometry" args={[1, 1, 1]} />
        <meshBasicMaterial name="my-material" />
      </mesh>
    </mesh>
  )

  describe('getByName', () => {
    it('should find the meshBasicMaterial', async () => {
      const { getByName } = await renderScene(<TestScene />)

      expect(getByName('my-material')).toBeTruthy()
    })

    it("should return null if it can't find anything", async () => {
      const { getByName } = await renderScene(<TestScene />)

      expect(getByName('my-mesh')).toBe(null)
    })

    it('should throw if it finds multiple', async () => {
      const { getByName } = await renderScene(<TestScene />)

      const res = () => getByName('my-geometry')

      const expectedMessage =
        'Found multiple elements with the name of: my-geometry\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByName`)).'

      expect(res).toThrowError(new Error(expectedMessage))
    })
  })

  describe('getAllByName', () => {
    it('should find the geometries', async () => {
      const { getAllByName } = await renderScene(<TestScene />)

      expect(getAllByName('my-geometry')).not.toEqual([])
    })

    it("should return [] if it can't find anything", async () => {
      const { getAllByName } = await renderScene(<TestScene />)

      expect(getAllByName('my-mesh')).toEqual([])
    })
  })
})
