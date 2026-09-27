// Service Pricing Configuration
export const servicePricing = {
    'graphic-design': {
        
        options: {
            'youtube-thumbnail': { name: 'YouTube Thumbnail', single: 20, package: 200, packageCount: 15 },
            'instagram-post': { name: 'Logo-Design', single: 50, package: 350, packageCount: 10 },
            'ads-design': { name: 'Ads Design', single: 20, package: 225, packageCount: 15 }
        }
    },
    'video-editing': {
        
        options: {
            'short-form': { 
                name: 'Short Form Video', 
                single: 30, 
                package: 300, 
                packageCount: 15,
                description: ''
            },
            'long-form': { 
                name: 'Long Form Video', 
                single: 50, 
                package: 500, 
                packageCount: 15,
                description: ''
            }
        }
    },
    'unlimited-service': {
        
        options: {
            'unlimited': {
                name: 'Unlimited Design & Video',
                tiers: [
                    { 
                        name: 'Monthly Plan', 
                        price: 700, 
                        description: '' 
                    },
                    { 
                        name: 'Yearly Plan', 
                        price: 6000, 
                        description: '' 
                    }
                ]
            }
        }
    },
    'tech-development': {
        
        options: {
            'web-development': {
                name: 'Web Development',
                tiers: [
                    { name: '6 Pages Website', price: 500, description: '' },
                    { name: '6+ Pages Website', price: 650, description: '' }
                ]
            },
            'mobile-app': {
                name: 'Mobile App Development',
                tiers: [
                    { name: 'Simple App', price: 700, description: '' },
                    { name: 'Advanced App', price: 1000, description: '' }
                ]
            },
            'ai-development': {
                name: 'AI Development',
                tiers: [
                    { name: 'Simple AI', price: 1000, description: '' },
                    { name: 'Advanced AI', price: 2000, description: '' }
                ]
            },
            'security-development': {
                name: 'Security Development',
                tiers: [
                    { name: 'Basic Security', price: 800, description: '' },
                    { name: 'Advanced Security', price: 3000, description: '' }
                ]
            }
        }
    }
};

export const toolsList = [
    { name: '@yoyohassane', logo: 'logos/1.avif' },
    { name: '@quasarcentralbts', logo: 'logos/2.avif' },
    { name: '@georgeoctavio', logo: 'logos/3.avif' },
    { name: '@mafolebaraka', logo: 'logos/4.avif' },
    { name: '@aerial_hd', logo: 'logos/12.avif' },
    { name: '@dayoffdiy', logo: 'logos/5.avif' },
    { name: '@mario.valencia23', logo: 'logos/6.avif' },
    { name: '@preston.chambers1', logo: 'logos/7.avif' },
    { name: '@mishaperov_', logo: 'logos/8.avif' },
    { name: '@elysyan', logo: 'logos/9.avif' },
    { name: '@natexmorrissey', logo: 'logos/10.avif' },
    { name: '@johnazizzz', logo: 'logos/11.avif' }
];

