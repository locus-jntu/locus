import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionCache from '../utility/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import TokenProvider from '../providers/TokenProvider'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <RecoilRoot>
            <TokenProvider>
              <Component {...pageProps} />
            </TokenProvider>
          </RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    
  )
}

export default MyApp
