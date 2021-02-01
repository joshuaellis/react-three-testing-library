import * as React from 'react'

export default function useMeasure () {
  const [bounds, set] = React.useState({ width: 0, height: 0 })
  const ref = React.useCallback((node) => {
    set({ width: 1280, height: 800 })
  }, [])
  return [ref, bounds]
}
