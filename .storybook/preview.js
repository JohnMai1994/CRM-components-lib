import React from "react";
import {addDecorator} from "@storybook/react";
import {ThemeProvider} from "styled-components";
import theme from "../src/theme";


// export const decorators = [
//     (Story) => (
//         <ThemeProvider theme={theme}>
//             <Story/>
//         </ThemeProvider>
//     )
//
// ]

addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}