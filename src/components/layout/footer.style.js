import styled from 'styled-components'
import { getSpacing } from '../../utils/helpers'

const light = '#ecf0f1'
const dark = '#2c3e50'

export const Wrapper = styled.div`
  padding: ${getSpacing(4)};
  background: ${(props) => (props.theme === 'light' ? light : dark)};
`

export const Title = styled.h1`
  font-size: ${getSpacing(2)};
  text-align: center;
  color: seagreen;
`

export const FooterDescription = styled.h1`
  font-size: ${getSpacing(1)};
  text-align: center;
  color: yellowgreen;
`

export const Button = styled.button`
  color: ${light};
  font-size: ${getSpacing(1)};
  margin: ${getSpacing(1)};
  padding: ${getSpacing(0.5)} ${getSpacing(1)};
  border: 2px solid ${light};
  border-radius: 3px;
  background: ${dark};
`

export const LightButton = styled(Button)`
  color: ${dark};
  background: ${light};
  border-color: ${dark};
`
