import * as React from 'react'

import { Menu, MenuItem, Button } from 'semantic-ui-react'

interface TopBarProps {
  onClick: () => void
}
const TopBar = (props: TopBarProps): JSX.Element => {
  return (
    <Menu>
      <MenuItem>
        <Button icon="setting" onClick={props.onClick} />
      </MenuItem>
    </Menu>
  )
}

export default TopBar