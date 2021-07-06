import type { ReactThreeTest } from '@react-three/test-renderer'

interface GetByAPI {
  getAllByName: (name: string) => ReactThreeTest.ReactThreeTestInstance[]
  getByName: (name: string) => ReactThreeTest.ReactThreeTestInstance
}

export type Queries = GetByAPI

export type ReactThreeTestInstance = ReactThreeTest.ReactThreeTestInstance
