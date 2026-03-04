import type { Metadata } from 'next'

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.geekytechh.in/#organization',
    name: 'GeekyTechh',
    alternateName: 'Geeky Techh',
    url: 'https://www.geekytechh.in',
    logo: 'https://www.geekytechh.in/favicon/web-app-manifest-512x512.png',
    image: 'https://www.geekytechh.in/favicon/web-app-manifest-512x512.png',
    description: 'Premium Web Development & Digital Solutions - Custom websites, e-commerce platforms, and innovative digital experiences in India',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0760,
        longitude: 72.8777,
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+91-77748-97159',
        email: 'geekytechh@gmail.com',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
        hoursAvailable: { '@type': 'OpeningHours', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
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
        'Network & Cybersecurity',
        'IT Consulting',
    ],
    knowsAbout: ['Next.js', 'React', 'Node.js', 'TypeScript', 'UI/UX Design', 'Cybersecurity'],
}

export const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Web Development', description: 'Modern, responsive websites with cutting-edge technologies' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'AI/ML Solutions', description: 'Intelligent systems and machine learning solutions' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'UI/UX Design', description: 'Intuitive and visually compelling user experiences' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Backend Development', description: 'Scalable and secure server-side architectures' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Network & Cybersecurity', description: 'Secure network infrastructure and cybersecurity solutions' } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'IT Consulting', description: 'Strategic technology guidance to accelerate growth' } },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
        </>
    )
}
