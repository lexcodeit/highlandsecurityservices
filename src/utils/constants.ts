import { ServicesEnums } from "./enums";
import { PostProps, ValuePropProps } from "./interfaces";

export const serviceValues = [
    {
        title: "Professionalism",
        description:
            "We uphold the highest standards of conduct in every engagement. Our team operates with discipline, courtesy, and integrity to deliver world-class service.",
    },
    {
        title: "Reliability",
        description:
            "Clients trust us because we are consistently dependable. We show up prepared, punctual, and committed to the success of every assignment.",
    },
    {
        title: "Vigilance",
        description:
            "Our personnel are trained to detect risks early and respond before issues escalate, ensuring a safe and controlled environment at all times.",
    },
    {
        title: "Excellence in Training",
        description:
            "Continuous training and tactical readiness empower us to deploy highly competent officers capable of handling diverse security challenges.",
    },
    {
        title: "Client-Centered Service",
        description:
            "Every client has unique needs. We adapt our solutions to deliver protection tailored to your environment, lifestyle, or business operations.",
    },
    {
        title: "Integrity & Transparency",
        description:
            "Trust is the foundation of security. We operate with honesty, accountability, and clear communication in every engagement.",
    },
];

// Instagram page
export const InstagramPage =
    "https://www.instagram.com/highland_securityservices/";
export const LinkedInPage =
    "https://www.linkedin.com/company/highland-security-services-ng";
export const FacebookPage = "https://web.facebook.com/highlandfbteam";
export const TiktokPage = "https://www.tiktok.com/@highlandsecurity";
export const BlogPageLink = "https://www.highlandsecurityservices.com/blog";

export const ServicesListArr: ServicesEnums[] = [
    "bodyguard",
    "corporate",
    "escort",
    "event",
    "residential",
    "specialized",
    "surveillance",
    "cctv",
    "bullion",
];

export const PostListArr: PostProps[] = [
    {
        category: "tips",
        date: "September 07 2025",
        id: 1,
        image: "blog1.jpg",
        shortRead:
            "Protecting your home starts with the basics. From smart locks to vigilant monitoring, here are five practical steps to keep your family safe.",
        title: "5 Essential Home Security Practices for Lagos Residents",
    },
    {
        category: "insights",
        date: "September 07 2025",
        id: 2,
        image: "blog2.jpg",
        shortRead:
            "Around-the-clock protection is no longer optional for serious organizations. Discover why.",
        title: "Why Businesses Need 24/7 Security in Today’s World",
    },
    {
        category: "insights",
        date: "September 07 2025",
        id: 3,
        image: "blog3.jpg",
        shortRead:
            "A behind-the-scenes look at our event security strategy and execution...",
        title: "How We Secured a High-Profile Corporate Event in Lagos",
    },
];

export const ValueListArr: ValuePropProps[] = [
    {
        count: "01",
        description:
            "With over a decade of proven security expertise, we have safeguarded businesses, estates, and high-profile individuals across Nigeria. Our track record speaks for itself — trusted protection in every situation.",
        image: "shield.svg",
        title: "10+ Years of Experience",
    },
    {
        count: "02",
        description:
            "Every guard is carefully selected, rigorously trained, and fully vetted to ensure the highest level of discipline and reliability. We hold our personnel to the strictest professional standards in the industry.",
        image: "professional.svg",
        title: "Trained & Vetted Guards",
    },
    {
        count: "03",
        description:
            "Your safety doesn’t take breaks — and neither do we. Our teams operate day and night, ensuring rapid response and continuous protection for individuals, businesses, and communities.",
        image: "247.svg",
        title: "Always On Guard",
    },
    {
        count: "04",
        description:
            "No two clients are alike, which is why we design security solutions to match unique risks and requirements. From industrial sites to personal protection, our strategies are built around you.",
        image: "strategy.svg",
        title: "Custom Security Strategies",
    },
];
