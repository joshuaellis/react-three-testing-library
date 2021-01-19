import * as React from 'react'
import { Canvas, CanvasProps } from 'react-three-fiber'
import ObserverPolyfill from 'resize-observer-polyfill'

const testHarness = (
  scene: React.ReactNode,
  canvasProps: Omit<CanvasProps, 'children'> = {}
) => (
  <Canvas resize={{ polyfill: ObserverPolyfill }} {...canvasProps}>
    {scene}
  </Canvas>
)

export { testHarness }
