import TestRenderer, { act, ReactTestRenderer } from 'react-test-renderer'

import { getQueriesForScene } from '../helpers/getQueriesForScene'

import { RenderSceneOptions, RenderSceneResult } from '../types'

import { testHarness } from './testHarness'

const renderScene = (
  scene: React.ReactElement,
  options: RenderSceneOptions = {}
): RenderSceneResult => {
  let renderer: ReactTestRenderer | null = null

  act(() => {
    renderer = TestRenderer.create(testHarness(scene, options.canvasProps))
  })

  const renderedScene = renderer!.toTree()!.props.children

  return {
    scene: renderedScene,
    unmount: () => renderer!.unmount(),
    rerender: (renderScene: React.ReactElement) => {
      act(() => {
        renderer!.update(renderScene)
      })
    },
    ...getQueriesForScene(renderedScene)
  } as RenderSceneResult
}

export { renderScene }
