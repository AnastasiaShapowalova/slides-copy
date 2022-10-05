import styled from 'styled-components'

const StyledScreen = styled.div`
  background-color: ${(props) => props?.bg ? `var(--screen-bg-${props.bg})` : `var(--screen-bg-default)`};
`

export default StyledScreen