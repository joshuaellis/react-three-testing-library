import React from 'react'
import TestRenderer, { act, ReactTestRenderer } from 'react-test-renderer'

import { getQueriesForScene } from '../helpers/getQueriesForScene'

import { RenderSceneOptions, RenderSceneResult } from '../types'

import { testHarness } from './testHarness'

const renderScene = (scene: any, options: RenderSceneOptions = {}) => {
  let renderer: ReactTestRenderer | null = null

  act(() => {
    renderer = TestRenderer.create(testHarness(scene), {
      createNodeMock: (el) => {
        return {
          ...el,
          addEventListener: () => null,
          removeEventListener: () => null
        }
      }
    })
  })

  const renderedScene = renderer!.toJSON()

  //@ts-expect-error
  console.log(renderedScene!.children[0].props)

  return {
    scene: renderedScene,
    unmount: () => renderer!.unmount(),
    rerender: (renderScene: React.ReactElement) => {
      act(() => {
        renderer!.update(renderScene)
      })
    }
    // ...getQueriesForScene(renderedScene)
  }
}

export { renderScene }
