import { toBeType } from './toBeType'
import { toHaveMaterial } from './toHaveMaterial'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeType: (type: string) => R
      toHaveMaterial: (type?: string) => R
    }
  }
}

expect.extend({ toBeType, toHaveMaterial })
