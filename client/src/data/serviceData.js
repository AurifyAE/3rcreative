import brandReflection from '../assets/servicesIcons/brandRef.svg';
import logoDesigning from '../assets/servicesIcons/logo.svg';
import brandGuidelines from '../assets/servicesIcons/brandGuide.svg';
import brandPositioning from '../assets/servicesIcons/brandPos.svg';
import rebranding from '../assets/servicesIcons/rebrand.svg';
import storyIdentification from '../assets/servicesIcons/storyIdentify.svg';
import contentRefinement from '../assets/servicesIcons/contentRefine.svg';
import storyDistribution from '../assets/servicesIcons/storyDist.svg';
import visualStorytelling from '../assets/servicesIcons/visualStory.svg';
import seo from '../assets/servicesIcons/seo.svg';
import emailCampaigns from '../assets/servicesIcons/email.svg';
import ppc from '../assets/servicesIcons/ppc.svg';
import influencer from '../assets/servicesIcons/influencer.svg';
import socialMedia from '../assets/servicesIcons/smm.svg';
import ecom from '../assets/servicesIcons/ecom.svg';
import website from '../assets/servicesIcons/web.svg';
import uiux from '../assets/servicesIcons/uiux.svg';
import mobile from '../assets/servicesIcons/app.svg';
import cro from '../assets/servicesIcons/cro.svg';
import ab from '../assets/servicesIcons/ab.svg';
import dash from '../assets/servicesIcons/perfomanceDash.svg';
import graphic from '../assets/servicesIcons/graphic.svg';
import photo from '../assets/servicesIcons/photography.svg';
import video from '../assets/servicesIcons/videoPro.svg';
import media from '../assets/servicesIcons/media.svg';
import event from '../assets/servicesIcons/eventMarketing.svg';
import crisis from '../assets/servicesIcons/crisis.svg';
import research from '../assets/servicesIcons/marketResearch.svg';
import strategy from '../assets/servicesIcons/brandStrategy.svg';
import analysis from '../assets/servicesIcons/competitorAnalysis.svg';
import crm from '../assets/servicesIcons/crmAuto.svg';
import arvr from '../assets/servicesIcons/arvr.svg';
import ai from '../assets/servicesIcons/ai.svg';
import sustainable from '../assets/servicesIcons/susStory.svg';
import impact from '../assets/servicesIcons/impact.svg';

const services = [
    {
        id: 1,
        title: "Branding &\n Identity Development",
        description:
        'At 3RCreative, we uncover your true brand essence, craft iconic designs, and build cohesive identities that resonate. From logo creation to full rebranding, we position you to stand out, stay consistent, and connect deeply with your audience.',
        types : [
            {
                id: 1,
                title: 'Brand reflection',
                icon: brandReflection,
                desc: 'Unearthing your true brand essence and story.'
            },
            {
                id: 2,
                title: 'Logo Designing',
                icon: logoDesigning,
                desc: "Crafting timeless logos that reflect your brand's identity."
            },
            {
                id: 3,
                title: 'Brand Guidelines',
                icon: brandGuidelines,
                desc: 'Developing a consistent visual and verbal identity, from typography to tone of voice.'
            },
            {
                id: 4,
                title: 'Brand Positioning',
                icon: brandPositioning,
                desc: 'Defining your unique place in the market.'
            },
            {
                id: 5,
                title: 'Rebranding',
                icon: rebranding,
                desc: 'Revitalizing your brand for modern audiences without losing its soul.'
            }
        ]
    },
    {
        id: 2,
        title: "Storytelling and Content Creation",
        description: "At 3RCreative, we turn your brand's voice into powerful stories that captivate and inspire. Through strategic content creation — from words to visuals — we craft narratives that build emotional connections, spark engagement, and drive lasting impact.",
        types : [
            {
                id: 1,
                title: 'Story Identification',
                icon: storyIdentification,
                desc: 'Finding your authentic brand narrative.'
            },
            {
                id: 2,
                title: 'Content Refinement',
                icon: contentRefinement,
                desc: "Ensuring your messaging is clear, authentic, and engaging."
            },
            {
                id: 3,
                title: 'Story Distribution',
                icon: storyDistribution,
                desc: 'Delivering your story to the right audience through the right channels.'
            },
            {
                id: 4,
                title: 'Visual Storytelling',
                icon: visualStorytelling,
                desc: 'Creating videos, graphics, and photography that resonate emotionally.'
            }
        ]
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "we amplify your brand's presence across digital landscapes with smart, data-driven strategies. From social media to SEO, we craft campaigns that spark engagement, build loyalty, and drive real growth.",
        types : [
            {
                id: 1,
                title: 'Search Engine Optimization (SEO)',
                icon: seo,
                desc: 'Making your brand discoverable online.'
            },
            {
                id: 2,
                title: 'Email Campaigns',
                icon: emailCampaigns,
                desc: "Crafting personalized, impactful email journeys."
            },
            {
                id: 3,
                title: 'Pay-Per-Click (PPC) Advertising',
                icon: ppc,
                desc: 'Running targeted ads for measurable results.'
            },
            {
                id: 4,
                title: 'Influencer Marketing',
                icon: influencer,
                desc: "Collaborating with influencers who align with your brand's story."
            },
            {
                id: 5,
                title: 'Social Media Marketing',
                icon: socialMedia,
                desc: 'Connecting with audiences through authentic, engaging campaigns on platforms like Instagram, LinkedIn, and TikTok.'
            },
        ]
    },
    {
        id: 4,
        title: "Web & Digital Experiences",
        description: 'we design seamless digital experiences that are as intuitive as they are impactful. From engaging websites to interactive platforms, we merge design and technology to create user journeys that connect, convert, and delight.',
        types : [
            {
                id: 1,
                title: 'E-Commerce Solutions',
                icon: ecom,
                desc: 'Creating seamless shopping experiences for your customers.'
            },
            {
                id: 2,
                title: 'Website Design and Development',
                icon: website,
                desc: "Building intuitive, visually appealing websites that reflect your brand and drive engagement."
            },
            {
                id: 3,
                title: 'UI/UX Design',
                icon: uiux,
                desc: 'Ensuring every digital touchpoint is meaningful and intuitive.'
            },
            {
                id: 4,
                title: 'Mobile App Development',
                icon: mobile,
                desc: "Designing apps that resonate with your audience's needs."
            }
        ]
    },
    {
        id: 5,
        title: "Performance Marketing and Analytics",
        description: 'we design seamless digital experiences that are as intuitive as they are impactful. From engaging websites to interactive platforms, we merge design and technology to create user journeys that connect, convert, and delight.',
        types : [
            {
                id: 1,
                title: 'Conversion Rate Optimization (CRO)',
                icon: cro,
                desc: 'Maximizing the impact of your website and campaigns.'
            },
            {
                id: 2,
                title: 'A/B Testing',
                icon: ab,
                desc: 'Refining your messaging and visuals to achieve the best results.'
            },
            {
                id: 3,
                title: 'Performance Dashboards',
                icon: dash,
                desc: 'Providing actionable insights through comprehensive analytics.'
            },
            
        ]
    },
    {
        id: 6,
        title: "Creative Services",
        description: 'We craft bold, purpose-driven visuals that speak directly to your audience. Whether through striking design, compelling photography, or cinematic videography, our creative work is rooted in clarity, authenticity, and modern aesthetics.',
        types : [
            {
                id: 1,
                title: 'Graphic Design',
                icon: graphic,
                desc: "From packaging to posters, we create visuals that stand out."
            },
            {
                id: 2,
                title: 'Photography',
                icon: photo,
                desc: "Capturing the essence of your brand, product, or service."
            },
            {
                id: 3,
                title: 'Video Production',
                icon: video,
                desc: "Crafting compelling videos that tell your story."
            },
        ]
    },
    {
        id: 7,
        title: "Public Relations and Outreach",
        description: "Shaping perception, building trust, and amplifying your voice. We help you craft the right message and get it in front of the right audience—strategically, authentically, and impactfully. Our PR and outreach services are designed to elevate your brand's visibility while aligning with values that matter to today's consumers.",
        types : [
            {
                id: 1,
                title: 'Media Relations',
                icon: media,
                desc: "Amplifying your story through press coverage."
            },
            {
                id: 2,
                title: 'Event Marketing',
                icon: event,
                desc: "Creating memorable in-person or virtual brand experiences."
            },
            {
                id: 3,
                title: 'Crisis Management',
                icon: crisis,
                desc: "Protecting your brand's reputation during challenging times."
            },
        ]
    },
    {
        id: 8,
        title: "Strategy and Consulting",
        description: "Purpose-led brand strategies that drive clarity, consistency, and growth. We help brands build strong foundations through insight-driven strategy and expert consulting. Whether you're launching, evolving, or repositioning, we craft brand, marketing, and digital strategies that align with your mission and connect with your audience. Our strategic approach ensures every creative decision is backed by purpose—and built to perform.",
        types : [
            {
                id: 1,
                title: 'Market Research',
                icon: research,
                desc: "Understanding your audience and competitors."
            },
            {
                id: 2,
                title: 'Brand and Digital Strategy',
                icon: strategy,
                desc: "Developing actionable roadmaps for brand success."
            },
            {
                id: 3,
                title: 'Competitor Analysis',
                icon: analysis,
                desc: "Identifying opportunities to set your brand apart."
            },
        ]
    },
    {
        id: 9,
        title: "Technology Integration",
        description: "Merging innovation with experience to future-proof your brand. We help brands harness the power of emerging technology to streamline operations, elevate experiences, and unlock smarter engagement. From seamless CRM setups to immersive AR/VR and intelligent AI-driven solutions, we ensure your brand stays ahead—strategically and sustainably.",
        types : [
            {
                id: 1,
                title: 'CRM and Automation',
                icon: crm,
                desc: "Implementing tools like Salesforce or HubSpot to streamline customer relationships."
            },
            {
                id: 2,
                title: 'AR/VR Experiences',
                icon: arvr,
                desc: "Crafting immersive experiences for your brand."
            },
            {
                id: 3,
                title: 'AI Solutions',
                icon: ai,
                desc: "Leveraging AI for personalization and smarter campaigns."
            },
        ]
    },
    {
        id: 10,
        title: "Sustainability and Social Impact Branding",
        description: "Authentic Campaigns for a Values-Driven World We craft purpose-driven campaigns that authentically communicate your brand's commitment to environmental sustainability and social responsibility, helping you connect with modern, values-led consumers through impactful storytelling and strategic outreach.",
        types : [
            {
                id: 1,
                title: 'Sustainable Storytelling',
                icon: sustainable,
                desc: "Crafting impactful stories that reflect your brand's sustainable purpose."
            },
            {
                id: 2,
                title: 'Impact Reporting & Transparency',
                icon: impact,
                desc: "Engage modern consumers where it matters."
            },
        ]
    }
    // Add more items here if needed
];

export default services;