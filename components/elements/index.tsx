import { ThemeProps } from 'styled-components'

export interface U {
  [key: string]: any
}

export interface T extends ThemeProps<any> {
  [key: string]: any
}

export { default as Heading } from './heading'
export { default as Text } from './text'
export { default as Divider } from './divider'
export { default as Link } from './link'
export { default as Time } from './time'
export { default as List } from './list'
export { default as Box } from 'ui-box'
