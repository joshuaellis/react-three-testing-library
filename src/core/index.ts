import TestRenderer from 'react-test-renderer'

import { getQueriesForScene } from '../helpers/getQueriesForScene'

import { RenderSceneOptions, RenderSceneResult } from '../types'

import { testHarness } from './testHarness'

const renderScene = (
  scene: React.ReactNode,
  options: RenderSceneOptions = {}
): RenderSceneResult => {
  const renderer = TestRenderer.create(testHarness(scene, options.canvasProps))

  const renderedScene = renderer.toTree()!.props.children

  return {
    scene: renderedScene,
    ...getQueriesForScene(renderedScene)
  } as RenderSceneResult
}

export { renderScene }
