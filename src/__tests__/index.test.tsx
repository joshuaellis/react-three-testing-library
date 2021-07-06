import * as React from 'react'
import { Vector3 } from 'three'

import { renderScene } from '../index'

describe('react-three-testing-library', () => {
  it('should render a scene', async () => {
    const position = new Vector3(1, 1, 1)

    const { scene } = await renderScene(
      <mesh position={position}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshBasicMaterial />
        </mesh>
      </mesh>
    )

    expect(scene).toBeTruthy()
  })

  it('should unmount my scene', async () => {
    const { unmount, scene } = await renderScene(
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshBasicMaterial />
        </mesh>
      </mesh>
    )

    expect(scene.children).toHaveLength(1)

    await unmount()

    expect(scene.children).toHaveLength(0)
  })
})
