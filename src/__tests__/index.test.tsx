import * as React from 'react'
import { useThree } from 'react-three-fiber'
import { Vector3 } from 'three'

import { renderScene } from '../index'

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: any) => {
      return ''
    }
  })
})

describe('react-three-testing-library', () => {
  // it("should find material's testid in deeply nested scene graph", () => {
  //   const position = new Vector3(1, 1, 1)

  //   const { scene } = renderScene(
  //     <mesh position={position}>
  //       <boxBufferGeometry args={[1, 1, 1]} />
  //       <meshBasicMaterial />
  //       <mesh>
  //         <boxBufferGeometry args={[1, 1, 1]} />
  //         <meshBasicMaterial data-testid="material" />
  //       </mesh>
  //     </mesh>
  //   )

  //   expect(scene).toBeTruthy()
  // })

  const TestComponent = () => {
    const geomRef = React.useRef<THREE.BoxBufferGeometry>(null!)
    const handlePointerDown = () => {
      geomRef.current.scale(10, 10, 10)
    }
    const { clock } = useThree()
    console.log(clock)
    return (
      <mesh data-testid="mesh" onPointerDown={handlePointerDown}>
        <boxBufferGeometry ref={geomRef} data-testid="geom" args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh>
    )
  }

  it('should handle a pointerDown event', () => {
    renderScene(<TestComponent />)

    // const el = getByTestId('mesh')
    // console.log(el)
    // el.props.onPointerDown()

    // console.log(getByTestId('geom'))

    // expect(getByTestId('geom')).toBeFalsy()
  })
})
