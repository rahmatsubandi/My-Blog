import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString()
    const featuredImage = {
        url: `https://rahmatsubandi.me${image}`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title} – Rahmat Subandi`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: summary,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName="Rahmat Subandi"
                dateModified={date}
                datePublished={date}
                description={summary}
                images={[featuredImage]}
                publisherLogo="/static/favicon.ico"
                publisherName="Rahmat Subandi"
                title={title}
                url={url}
            />
        </>
    )
}

export default BlogSeo