import { toBeType } from './toBeType'

declare namespace jest {
  interface Matchers<R, T> {
    toBeType: (type: string) => R
  }
}

expect.extend({ toBeType })
