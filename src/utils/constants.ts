import { ServicesEnums } from "./enums";
import { PostProps, ValuePropProps } from "./interfaces";

export const ServicesListArr: ServicesEnums[] = [
    "bodyguard",
    "corporate",
    "escort",
    "event",
    "residential",
    "specialized",
    "surveillance",
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
