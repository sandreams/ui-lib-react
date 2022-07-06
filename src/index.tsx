import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Icon from './icon'
// import {} from ''
interface Prop {
  name: string
}
const Wrapper = styled.div`
  .icon {
    height: 20px;
    width: 20px;
    fill: red;
    vertical-align: middle;
  }
`
const App: React.FC<Prop> = (props) => {
  return (
    <Wrapper>
      <Icon name="tag" iconClass="icon" />
      <span>图标</span>
    </Wrapper>
  )
}
ReactDOM.render(<App name="fan" />, document.getElementById('app'))
