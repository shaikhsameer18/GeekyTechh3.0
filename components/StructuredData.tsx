import type { Metadata } from 'next'

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GeekyTechh',
    alternateName: 'Geeky Techh',
    url: 'https://www.geekytechh.in',
    logo: 'https://www.geekytechh.in/logo.png',
    description: 'Premium Web Development & Digital Solutions - Custom websites, e-commerce platforms, and innovative digital experiences in India',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
        'https://github.com/shaikhsameer18',
        'https://vercel.com/shaikhsameer18',
    ],
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
    serviceType: [
        'Web Development',
        'E-commerce Development',
        'UI/UX Design',
        'Mobile App Development',
        'AI/ML Solutions',
        'Digital Marketing',
        'SEO Optimization',
    ],
}

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GeekyTechh',
    url: 'https://www.geekytechh.in',
    description: 'Premium web development and digital solutions',
    inLanguage: 'en-IN',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.geekytechh.in/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
}

export const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.geekytechh.in',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.geekytechh.in/#services',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Projects',
            item: 'https://www.geekytechh.in/#projects',
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: 'Skills',
            item: 'https://www.geekytechh.in/#skills',
        },
        {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://www.geekytechh.in/#contact',
        },
    ],
}

export function StructuredData() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    )
}
