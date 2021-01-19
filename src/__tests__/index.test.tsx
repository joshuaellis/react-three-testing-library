import * as React from 'react'
import { Vector3 } from 'three'

import { renderScene } from '../index'

describe('react-three-testing-library', () => {
  it("should find material's testid in deeply nested scene graph", () => {
    const position = new Vector3(1, 1, 1)

    const { scene } = renderScene(
      <mesh position={position}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshBasicMaterial data-testid="mesh" />
        </mesh>
      </mesh>
    )

    expect(scene).toBeTruthy()
  })
})
