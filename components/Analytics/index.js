import React from 'react'

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-E11T3RQ7PE`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E11T3RQ7PE', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics
