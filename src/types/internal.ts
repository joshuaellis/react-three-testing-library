import type { ReactThreeTest } from '@react-three/test-renderer'

interface GetByAPI {
  getAllByTestId: (testId: string) => ReactThreeTest.ReactThreeTestInstance[]
  getByTestId: (testId: string) => ReactThreeTest.ReactThreeTestInstance[]
}

export type Queries = GetByAPI

export type ReactThreeTestInstance = ReactThreeTest.ReactThreeTestInstance
