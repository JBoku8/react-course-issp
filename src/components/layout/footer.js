import { useState } from 'react'
import styled from 'styled-components'

import {
  Title,
  Wrapper,
  FooterDescription,
  Button,
  LightButton,
} from './footer.style'

const Span = ({ className, children }) => (
  <span className={className}>{children}</span>
)

export const StyledSpan = styled(Span)`
  color: tomato;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export function Footer() {
  const [theme, setTheme] = useState('light')

  return (
    <Wrapper className="container mt-2 mb-4" theme={theme}>
      <footer>
        <Button onClick={() => setTheme('dark')}>Dark Button</Button>
        <LightButton onClick={() => setTheme('light')}>Light Button</LightButton>
        <Title>
          This is an Awesome <StyledSpan>footer.</StyledSpan>
        </Title>
        <FooterDescription>
          this is a footer <StyledSpan>FooterDescription</StyledSpan>{' '}
        </FooterDescription>
      </footer>
    </Wrapper>
  )
}

export default Footer
