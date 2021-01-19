import { CanvasProps } from 'react-three-fiber'

import { ReactThreeTestInstance } from './internal'

export type RenderSceneResult = {
  scene: ReactThreeTestInstance
  unmount: () => void
  rerender: (scene: React.ReactNode) => void
  getByTestId: (matcher: string) => ReactThreeTestInstance
}

export type RenderSceneOptions = {
  canvasProps?: CanvasProps
}
