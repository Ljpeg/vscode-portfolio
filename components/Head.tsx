import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="La Tasha Pollard is a creative who builds secure web apps and produces video content"
      />
      <meta property="og:title" content="L. Pollard's Portfolio" />
      <meta
        property="og:description"
        content="A creative exploring software development with a focus on security, usability, and storytelling."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'La Tasha Pollard',
};
