
import Hero from "../components/Hero";
import About from "../components/About";
import WeDo from "../components/WeDo";
import CaseStudles from "../components/Case-studles";
import Ourclients from "../components/Our-clients";
import Keymetrics from "../components/Key-metrics";
import Ourthinking from "../components/Our-thinking";
import Getintouch from "../components/Get-in-touch";

export default function Home() {
  return (
    <>
    <meta charSet="utf-8" />
      <meta
        name="csrf-token"
        content="hos7ZzF2JfjLLpXzCxPr2qBzkxCJ3STOpv4EffCx"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=2"
      />
      <meta
        name="description"
        content="D'ART Design a renowned name of retail design agency, brand design agency, brand design consultant, retail branding agency, brand design company, etc. We create perception for your emotions."
      />
      <link rel="canonical" href="https://www.dartdesign.in" />
      <meta
        name="keywords"
        content="Brand Design Agency, Brand Design Company, Experiential Design Agency, Retail Branding Agency, Retail Design Agency, Retail Business Management Consultant, Retail Consulting Services, Retail Design Solutions, Retail Solutions Company, Retail Branding Agencies in india, Retail Design Studio, Retail Design Company"
      />
      <link rel="preconnect" href="https://www.dartdesign.in" />
      <link rel="preconnect" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com/" />
      <link rel="dns-prefetch" href="https://www.dartdesign.in" />
      <meta name="document-type" content="Public" />
      <meta name="document-rating" content="Safe for Kids" />
      <meta name="Expires" content="never" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="YahooSeeker" content="Index,Follow" />
      <meta name="geo.region" content="IN" />
      <meta name="State" content="HARYANA" />
      <meta name="City" content="FARIDABAD" />
      <meta name="geo.position" content="28.447450;77.309726" />
      <meta name="ICBM" content="28.447450;77.309726" />
      <meta
        name="address"
        content="D'ART PVT LTD, 504 5th Floor, SRS Tower, Sector - 31, Mathura Road, Faridabad, Haryana - 121003"
      />
      <meta
        name="copyright"
        content="Copyright 2023 D'ART PVT LTD. ALL RIGHT RESERVED"
      />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="author" content="D'ART PVT LTD" />
      <meta name="og:type" content="article" />
      <meta
        name="title"
        property="og:title"
        content="Retail Design Agency | Brand Design Agency | Retail Branding Agency"
      />
      <meta
        name="image"
        property="og:image"
        content="https://www.dartdesign.in/images/d.png"
      />
      <meta name="og:site_name" content="D'ART PVT LTD" />
      <meta
        name="description"
        property="og:description"
        content="D'ART Design a renowned name of retail design agency, brand design agency, brand design consultant, retail branding agency, brand design company, etc. We create perception for your emotions."
      />
      <link rel="alternate" href="https://www.dartdesign.in" hrefLang="en-IN" />
      <link rel="publisher" href="https://g.page/DartDesign" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* Google tag (gtag.js) */}
      <link
        rel="stylesheet"
        href="https://www.dartdesign.in/assets/css/plugins/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://www.dartdesign.in/assets/css/style.css"
      />
      <link
        rel="icon"
        href="https://www.dartdesign.in/images/media/favicon.ico"
        type="image/x-icon"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.loader-wrap {\nbackground: 0 0;\nleft: 0;\nwidth: 100%;\ndisplay: flex;\n-webkit-box-align: center;\n-ms-flex-align: center;\nalign-items: center;\n-webkit-box-pack: center;\n-ms-flex-pack: center;\njustify-content: center;\nz-index: 99999999999999;\n}\n.hamenu, .loader-wrap {\nposition: fixed;\nheight: 100vh;\ntop: 0;\n}\n",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.portfolio--section .project-slide img {\nwidth: 100% !important;\nheight: auto !important;\n}\n.blog-modern .item {padding-right: 60px;}\n",
        }}
      />
      <main className="main-bg position-re">
        <Hero />
        <About />
        <WeDo />
        <CaseStudles />
        <Ourclients />
        <Keymetrics />
        <Ourthinking />
        <Getintouch />
      </main>
    </>
  );
}
