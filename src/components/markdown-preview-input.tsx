import * as React from 'react'

import { Form, TextArea } from 'semantic-ui-react'

interface MarkdownPreviewInputProps {
  onInput: (evt: React.SyntheticEvent<HTMLTextAreaElement>, data: { value: string }) => void
}

const MarkdownPreviewInput = (props: MarkdownPreviewInputProps): JSX.Element => {
  return (
    <Form>
      <TextArea 
        style={{minHeight: 'calc(100vh - 5rem)'}}
        onInput={props.onInput}
      />
    </Form>
  )
}

export default MarkdownPreviewInput