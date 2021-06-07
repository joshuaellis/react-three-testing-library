import { ReactThreeTestInstance } from 'types/internal'

const getElementError = (message: string): Error => {
  return new Error([message].filter(Boolean).join('\n\n'))
}

const getMultipleElementsFoundError = (message: string): Error =>
  getElementError(
    `${message}\n\n(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`
  )

class PrimitiveTypeError<Matcher extends () => void> extends Error {
  constructor(
    received: ReactThreeTestInstance,
    types: string[],
    matcherFn: Matcher,
    context: jest.MatcherContext
  ) {
    super()
    let withType = ''
    try {
      withType = context.utils.printWithType(
        'Received',
        received,
        context.utils.printReceived
      )
    } catch (e) {}
    this.message = [
      context.utils.matcherHint(
        `${context.isNot ? '.not' : ''}.${matcherFn.name}`,
        'received',
        ''
      ),
      '',
      `${context.utils.RECEIVED_COLOR(
        'received'
      )} value must be of the following:${types.map((t) => `\n- ${t}`)}`,
      withType,
    ].join('\n')
  }
}

export { getElementError, getMultipleElementsFoundError, PrimitiveTypeError }
