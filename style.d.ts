import { ICustomTheme } from './theme/Theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ICustomTheme {}
}
