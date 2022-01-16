const title = 'Overall Wiki'
const description = 'Web pages to get all info.'

const SEO = {
  title,
  description,
  canonical: '',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@_tamagoez_',
    site: '@_tamagoez_',
    cardType: 'summary_large_image',
  },
}

export default SEO