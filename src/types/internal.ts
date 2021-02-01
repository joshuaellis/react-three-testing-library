import { CanvasProps } from 'react-three-fiber'
import { ReactTestInstance } from 'react-test-renderer'

export type ReactThreeTestInstance = ReactTestInstance

export type TestHarnessCanvasProps = Omit<CanvasProps, 'children'>

interface GetByAPI {
    getAllByTestId: (testId: string) => ReactThreeTestInstance[]
    getByTestId: (testId: string) => ReactThreeTestInstance
}


export type Queries = GetByAPI