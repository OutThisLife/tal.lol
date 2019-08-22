import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { extractStyles } from 'ui-box'

export default class extends Document<{ styleTags: React.ReactNode[] }> {
  public static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const boxSheet = extractStyles()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style>{boxSheet.styles}</style>
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
