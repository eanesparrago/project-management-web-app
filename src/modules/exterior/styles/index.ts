import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Typography, Form, FormProps } from 'antd'

const { Title } = Typography

export const ScTitle = styled(Title)`
  margin-bottom: 3rem;
`

export const ScForm: FunctionComponent<FormProps> = styled(Form)`
  width: 32rem;

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    width: 100%;
  }
`

export const HeaderBlock = styled.header`
  padding: 1.5rem 2rem;
  margin-bottom: 4rem;
  display: flex;
`

export const MainBlock = styled.main`
  padding-left: 6rem;

  @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const PageBlock = styled.div`
  padding-bottom: 6rem;
`
