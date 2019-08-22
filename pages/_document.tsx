import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { extractStyles } from 'ui-box'

export default class extends Document<{ styleTags: React.ReactNode[] }> {
  public static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      const { styles, cache } = extractStyles()

      return {
        ...initialProps,
        scripts: (
          <>
            <script type="application/json" id="ui-box-cache">
              ${JSON.stringify(cache)}
            </script>
          </>
        ),
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style>{styles}</style>
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
