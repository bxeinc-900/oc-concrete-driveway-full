import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://occoncretedriveway.com'

    const cities = [
        'costa-mesa', 'anaheim', 'huntington-beach', 'laguna-niguel', 'villa-park', 'tustin', 'yorba-linda',
        'irvine', 'newport-beach', 'mission-viejo', 'fullerton', 'garden-grove', 'orange',
        'corona', 'riverside', 'chino-hills', 'moreno-valley', 'murrieta', 'temecula', 'jurupa-valley',
        'eastvale', 'norco'
    ]

    const cityUrls = cities.map((city) => ({
        url: `${baseUrl}/service-areas/${city}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        ...cityUrls,
    ]
}
