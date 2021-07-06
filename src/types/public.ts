import { ReactThreeTest } from '@react-three/test-renderer'
import { Queries } from './internal'

export type RenderSceneResult = Pick<
  ReactThreeTest.Renderer,
  'scene' | 'unmount' | 'fireEvent' | 'advanceFrames'
> &
  Queries & {}
