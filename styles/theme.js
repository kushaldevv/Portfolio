import {theme as chakraTheme} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
  ...chakraTheme.fonts,
  body: `Fira Code,monospace,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Fira Code,monospace,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const breakpoints = createBreakpoints({
  sm: '42em',
  md: '55em',
  lg: '57.5em',
  xlg: '62em'
})

const shadows = {
  outline: '0 0 0 2px var(--chakra-colors-green-500)',
};

const overrides = {
  ...chakraTheme, 
  fonts,
  breakpoints,
  shadows,
  fontWeights: {
    normal: 300,
    medium: 500, 
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  }
}

const customTheme = extendTheme(overrides)

export default customTheme