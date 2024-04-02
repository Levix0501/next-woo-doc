import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <Image src="/next-woo.png" alt="Next Woo Logo" width={145} height={24} />
  ),
  project: {
    link: 'https://github.com/Levix0501/next-woo-doc',
  },
  head: function useHead() {
    return (
      <>
        <link
          rel="icon"
          href="/icon1.png"
          type="image/png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          href="/icon2.png"
          type="image/png"
          sizes="64x64"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        ></link>
      </>
    );
  },
};

export default config;
