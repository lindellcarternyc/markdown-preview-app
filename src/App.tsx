import * as React from 'react'

import { 
  // Container,
  Sidebar, SidebarPushable, SidebarPusher,
} from 'semantic-ui-react'

import TopBar from './components/top-bar'
import MarkdownPreview from './components/markdown-preview'

interface AppState {
  settingsOpen: boolean
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      settingsOpen: false
    }
  }
  onClickTopbarButton = () => {
    console.dir(this.state)
  }

  toggleSettingsOpen = () => {
    const settingsOpen = !this.state.settingsOpen
    this.setState({ settingsOpen })
  }
  render() {
    return (
      <SidebarPushable>
        <Sidebar visible={this.state.settingsOpen}>Menu</Sidebar>
        <SidebarPusher>
          <TopBar onClick={this.toggleSettingsOpen}/>
          <MarkdownPreview />
        </SidebarPusher>
      </SidebarPushable>
    )
  }
}

export default App
