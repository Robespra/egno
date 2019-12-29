import React from "react"
import PropTypes from "prop-types"
import icon32 from '../static/favicon-32x32.png'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
        <link rel="icon" type="image/png" href="https://robespra.github.io/uxpages/favicon-32x32.png" sizes="32x32"/>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31626671-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-31626671-1');
                  `,
            }}
          />
          <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101226440);</script>
          <script async src="//static.getclicky.com/js"></script>
          <link href="https://css.gg/c?=|adidas|backspace|battery|chevron-left|data|heart|inbox|mail-open|more-vertical-alt" rel="stylesheet"/>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

