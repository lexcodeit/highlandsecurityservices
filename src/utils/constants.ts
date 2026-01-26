import { ServicesEnums } from "./enums";
import { PostProps, ValuePropProps } from "./interfaces";
import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
    {
        text: "About",
        url: "/about",
        matchPath: "/about",
    },
    {
        text: "Services",
        url: "/services",
        matchPath: "/services",
    },
    {
        text: "Blog",
        url: "/blog",
        matchPath: "/blog",
    },
    {
        text: "Careers",
        url: "/careers",
        matchPath: "/careers",
    },
    {
        text: "FAQs",
        url: "/faqs",
        matchPath: "/faqs",
    },
    {
        text: "Contact",
        url: "/contact",
        matchPath: "/contact",
    },
];
export const serviceValues = [
    {
        title: "Professionalism",
        description:
            "We uphold the highest standards of conduct in every engagement. Our team operates with discipline, courtesy, and integrity to deliver world-class service.",
        bgColor: "#1A2E44", // Deep Navy
        textColor: "#FFFFFF",
    },
    {
        title: "Reliability",
        description:
            "Clients trust us because we are consistently dependable. We show up prepared, punctual, and committed to the success of every assignment.",
        bgColor: "#E5E7EB", // Soft Platinum/Grey
        textColor: "#111827",
    },
    {
        title: "Vigilance",
        description:
            "Our personnel are trained to detect risks early and respond before issues escalate, ensuring a safe and controlled environment at all times.",
        bgColor: "#F59E0B", // Alert Amber
        textColor: "#000000",
    },
    {
        title: "Excellence in Training",
        description:
            "Continuous training and tactical readiness empower us to deploy highly competent officers capable of handling diverse security challenges.",
        bgColor: "#065F46", // Tactical Forest Green
        textColor: "#FFFFFF",
    },
    {
        title: "Client-Centered Service",
        description:
            "Every client has unique needs. We adapt our solutions to deliver protection tailored to your environment, lifestyle, or business operations.",
        bgColor: "#0F172A", // Slate Black
        textColor: "#F1F5F9",
    },
    {
        title: "Integrity & Transparency",
        description:
            "Trust is the foundation of security. We operate with honesty, accountability, and clear communication in every engagement.",
        bgColor: "#0D9488", // Trust Teal
        textColor: "#FFFFFF",
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
    "cyber",
    "event",
    "residential",
    "specialized",
    "surveillance",
    "cctv",
    "bullion",
    "marine",
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
        image: "security-in-vest.jpg",
        title: "10+ Years of Experience",
    },
    {
        count: "02",
        description:
            "Every guard is carefully selected, rigorously trained, and fully vetted to ensure the highest level of discipline and reliability. We hold our personnel to the strictest professional standards in the industry.",
        image: "guards-ready-to-go.jpg",
        title: "Trained & Vetted Guards",
    },
    {
        count: "03",
        description:
            "Your safety doesn’t take breaks — and neither do we. Our teams operate day and night, ensuring rapid response and continuous protection for individuals, businesses, and communities.",
        image: "security-in-raincoat.jpg",
        title: "Always On Guard",
    },
    {
        count: "04",
        description:
            "No two clients are alike, which is why we design security solutions to match unique risks and requirements. From industrial sites to personal protection, our strategies are built around you.",
        image: "supervisor-giving-out-gears.jpg",
        title: "Custom Security Strategies",
    },
];
