import * as React from 'react'
import ReactThreeTestRenderer, {
  ReactThreeTest,
} from '@react-three/test-renderer'

import { getQueriesForScene } from 'helpers/getQueriesForScene'

import { RenderSceneResult } from 'types/public'

const renderScene = async (
  el: React.ReactNode,
  opts?: Partial<ReactThreeTest.CreateOptions>
): Promise<RenderSceneResult> => {
  const {
    scene,
    fireEvent,
    advanceFrames,
    unmount,
    update,
  } = await ReactThreeTestRenderer.create(el, opts)

  return {
    scene,
    fireEvent,
    advanceFrames,
    unmount,
    ...getQueriesForScene(scene),
  }
}

export { renderScene }
