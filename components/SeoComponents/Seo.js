'use client';
import React from 'react';
import config from '../../config';

function NextSeo({ title, description, path, metaImage, keywords }) {
    React.useEffect(() => {
        // Dynamically set the title
        document.title = title;

        // Dynamically set other meta tags
        const setMetaTag = (name, content) => {
            let metaTag = document.querySelector(`meta[name="${name}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('name', name);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        };

        const setPropertyMetaTag = (property, content) => {
            let metaTag = document.querySelector(`meta[property="${property}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('property', property);
                document.head.appendChild(metaTag);
            }
            metaTag.setAttribute('content', content);
        };

        setMetaTag('description', description);
        if (keywords) setMetaTag('keywords', keywords);
        setMetaTag('viewport', 'width=device-width, initial-scale=1');
        setMetaTag('robots', 'index, follow');
        setPropertyMetaTag('og:locale', 'en_US');
        setPropertyMetaTag('og:type', 'website');
        setPropertyMetaTag('og:title', title);
        setPropertyMetaTag('og:description', description);
        setPropertyMetaTag('og:url', `${config.mainWebUrl}${path}`);
        setPropertyMetaTag('og:site_name', 'Fuzhio');
        setPropertyMetaTag('og:image', metaImage);
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', title);
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', metaImage);

        // Dynamically set the favicon
        const link = document.querySelector("link[rel='icon']");
        if (link) link.href = '/images/cac_favicon-150x150.png';
        else {
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = '/images/cac_favicon-150x150.png';
            document.head.appendChild(favicon);
        }
    }, [title, description, path, metaImage, keywords]);

    return null; // No rendered output
}

export default NextSeo;
