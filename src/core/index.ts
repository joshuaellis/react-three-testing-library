import * as React from 'react'
import ReactThreeTestRenderer from '@react-three/test-renderer'

import { getQueriesForScene } from 'helpers/getQueriesForScene'

import { RenderSceneOpts, RenderSceneResult } from 'types/public'

const { create, act } = ReactThreeTestRenderer

const renderScene = async (
  el: React.ReactNode,
  { glProps }: RenderSceneOpts = {}
): Promise<RenderSceneResult> => {
  const { scene, fireEvent, advanceFrames, unmount } = await create(el, glProps)

  return {
    scene,
    fireEvent,
    advanceFrames,
    unmount,
    ...getQueriesForScene(scene),
  }
}

export { renderScene, act }
