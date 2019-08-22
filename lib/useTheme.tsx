import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default (): { [key: string]: string } =>
  useContext(ThemeContext as any) || {}
