import { extendTheme,ThemeConfig } from "@chakra-ui/react";
const config:ThemeConfig={
    initialColorMode:'dark'
};
const theme=extendTheme({config,
    colors:{
        gray:{
            50:'#FFF5F5',
            100:'#FED7D7',
            200:'#285E61',
            300:'#285E61',
            400:'#285E61',
            500:'RGBA(0, 0, 0, 0.64)',
            600:'#718096',
            700:'#2D3748',
            800:'#171923',
            900:'#975A16',
        }
    }
})
export default theme