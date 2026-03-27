import Head from "next/head";
import { SceneLoader } from "../components";
import { useEffect, useState } from "react";
import { NoScriptWarning } from "@/components/noscript/NoScript";
import { Analytics } from "@vercel/analytics/react"
import { profile } from "@/data/profile";

const focusedTitle = `${profile.name} - Portfolio`;
const blurredTitle = `👀 ${profile.name} - Portfolio`;

export default function Web() {
  const [title, setTitle] = useState(`${profile.name} - Portfolio`);

  function onVisibilityChange() {
    const title = document.visibilityState === 'visible' ? focusedTitle : blurredTitle;

    setTitle(title);
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    }

  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={profile.description} />

        <meta property="og:title" content={`${profile.name} - Portfolio`} />
        <meta property="og:description" content={profile.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${profile.websiteUrl}/assets/thumbnail.png`} />
        <meta property="og:url" content={profile.websiteUrl} />
        
        <meta property="twitter:image" content={`${profile.websiteUrl}/assets/thumbnail.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${profile.name}'s portfolio`} />
        <meta property="twitter:description" content={profile.description}/>
        <meta property="og:site_name" content={`${profile.name}'s portfolio`}></meta>

        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <NoScriptWarning />
      <SceneLoader />
      <Analytics />
    </>
  );
}
