const getElementError = (message: string): Error => {
  return new Error([message].filter(Boolean).join('\n\n'))
}

const getMultipleElementsFoundError = (message: string): Error =>
  getElementError(
    `${message}\n\n(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`
  )

export { getElementError, getMultipleElementsFoundError }
