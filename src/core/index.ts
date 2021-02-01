import React from 'react'
import TestRenderer, { ReactTestRenderer } from 'react-test-renderer'

import { getQueriesForScene } from '../helpers/getQueriesForScene'

import {
  RenderSceneOptions,
  RenderSceneResult,
} from '../types'
import {TestHarnessCanvasProps} from '../types/internal'

import { testHarness } from './testHarness'

import createContext from 'gl'

const renderScene = (
  scene: React.ReactElement,
  { canvasProps }: RenderSceneOptions = {}
) => {
  const renderer = renderWithAct(scene, canvasProps)

  const renderedScene = renderer.root

  // console.log(getQueriesForScene(renderedScene))

  return {
    scene: renderedScene,
    unmount: () => renderer!.unmount(),
    rerender: (renderScene: React.ReactElement) => {
      TestRenderer.act(() => {
        renderer!.update(renderScene)
      })
    },
    ...getQueriesForScene(renderedScene)
  } as RenderSceneResult
}

const renderWithAct = (
  scene: React.ReactElement,
  canvasProps: TestHarnessCanvasProps = {}
): ReactTestRenderer => {
  let renderer: ReactTestRenderer = TestRenderer.create(testHarness(scene, canvasProps), {
    createNodeMock: (el) => ({
      ...el,
      width: 1280,
      height: 800,
      style: {},
      getContext: () => {
        const context = createContext(1280, 800)
        return context
      },
      addEventListener: () => null,
      removeEventListener: () => null
    })
  })

  return (renderer as unknown) as ReactTestRenderer
}

export { renderScene }
