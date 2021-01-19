import { CanvasProps } from 'react-three-fiber'

import { ReactThreeTestInstance } from './internal'

export type RenderSceneResult = {
  scene: ReactThreeTestInstance
  getByTestId: (matcher: string) => ReactThreeTestInstance
}

export type RenderSceneOptions = {
  canvasProps?: CanvasProps
}
