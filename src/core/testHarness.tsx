import * as React from 'react'
import { Canvas } from 'react-three-fiber'

import {TestHarnessCanvasProps} from '../types/internal'

const testHarness = (
  scene: React.ReactNode,
  canvasProps: TestHarnessCanvasProps
) => (
  <Canvas {...canvasProps}>
    {scene}
  </Canvas>
)

export { testHarness }
