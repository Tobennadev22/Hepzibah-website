import { Helmet } from "react-helmet";

const SeoComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Hepzibahcare</title>
        <meta name="description" content="Your page description" />
        <meta name="keywords" content="React, SEO, Create React App" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your page description" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
      </Helmet>
    </div>
  );
};

export default SeoComponent;
