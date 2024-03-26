export interface ICustomTheme {
  palette: {
    highlight: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    black50: string;
    black100: string;
    black200: string;
    black300: string;
  };
}

export const CustomTheme: ICustomTheme = {
  palette: {
    highlight: '#ffdd0f',
    gray50: 'rgb(248, 248, 248)',
    gray100: 'rgb(234, 234, 234)',
    gray200: 'rgb(216, 216, 216)',
    gray300: 'rgb(186, 186, 186)',
    gray400: 'rgb(170, 170, 170)',
    gray500: 'rgb(155, 155, 155)',
    black50: 'rgb(71, 71, 71)',
    black100: 'rgb(45, 45, 45)',
    black200: 'rgb(30, 30, 30)',
    black300: 'rgb(16, 16, 16)',
  },
};
