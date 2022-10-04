import styled from 'styled-components'

const Text = styled.span`
	font-size: ${(props) => props?.fs ? `var(--fs-${props.fs})` : `var(--fs-body1)`};
	line-height: ${(props) => props?.lh ? `var(--lh-${props.fs})` : `var(--lh-body1)`};
	color: ${(props) => props?.color ? `var(--text-${props.color})` : `var(--text-default)`};
`

export default Text