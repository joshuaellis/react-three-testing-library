import { ReactThreeTestInstance, TestHarnessCanvasProps, Queries } from './internal'

export type RenderSceneResult = {
  scene: ReactThreeTestInstance
  unmount: () => void
  rerender: (scene: React.ReactElement) => void
} & Queries

export type RenderSceneOptions = {
  canvasProps?: TestHarnessCanvasProps
}