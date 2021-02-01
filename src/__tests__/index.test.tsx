import * as React from 'react'
import { useThree } from 'react-three-fiber'
import { Vector3 } from 'three'

import { renderScene } from '../index'

describe('react-three-testing-library', () => {
  // it("should render a scene", () => {
  //   const position = new Vector3(1, 1, 1)

  //   const { scene } = renderScene(
  //     <mesh position={position}>
  //       <boxBufferGeometry args={[1, 1, 1]} />
  //       <meshBasicMaterial />
  //       <mesh>
  //         <boxBufferGeometry args={[1, 1, 1]} />
  //         <meshBasicMaterial userData={{
  //           testId: 'material'
  //         }} />
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
    return (
      <mesh onPointerDown={handlePointerDown} userData={{ testId: 'mesh' }}>
        <boxBufferGeometry ref={geomRef} args={[1, 1, 1]} />
        <meshBasicMaterial />
      </mesh>
    )
  }

  it('should handle a pointerDown event', () => {
    const { getByTestId } = renderScene(<TestComponent />)

    const el = getByTestId('mesh')
    console.log(el)
    el.props.onPointerDown()

    console.log(getByTestId('geom'))

    expect(getByTestId('geom')).toBeFalsy()
  })
})
