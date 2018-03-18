import * as React from 'react'

import { 
  Grid, GridColumn
} from 'semantic-ui-react'

import MarkdownPreviewInput from './markdown-preview-input'

import * as showdown from 'showdown'

interface MarkdownPreviewState {
  input: string
  output: string
}
class MarkdownPreview extends React.Component<{}, MarkdownPreviewState> {
  private converter: showdown.Converter

  constructor(props: {}) {
    super(props)

    this.converter = new showdown.Converter()
    this.state = {
      input: '',
      output: this.converter.makeHtml('')
    }
  }

  onInput = (evt: React.SyntheticEvent<HTMLTextAreaElement>, data: { value: string }) => {
    this.setState({ input: data.value }, () => {
      this.processInput()
    })
  }

  processInput() {
    const { input } = this.state
    const output = this.converter.makeHtml(input)
    this.setState({ output })
  }

  renderOutput() {
    const html = {__html: this.state.output}
    return <div dangerouslySetInnerHTML={html} />
  }
  render() {
    return (
      <Grid columns="equal" centered>
        <GridColumn>
          <MarkdownPreviewInput onInput={this.onInput}/>
        </GridColumn>
        <GridColumn>
          {this.renderOutput()}
        </GridColumn>
      </Grid>
    )
  }
}

export default MarkdownPreview