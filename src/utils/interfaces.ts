import { PostCategoryEnums } from "./enums";

export interface SelectOptionType {
    value: string;
    label: string;
}

export interface JobProps {
    icon: string;
}

export interface JobApplicationInterface {
    q1: string;
    q2: string;
    q3: string;
}

export interface ServiceProps {
    image: string[];
    title: string;
    description: string;
    bgColor: string;
    textColor: string;
    slug: string;
}

export interface ValuePropProps {
    image: string;
    title: string;
    description: string;
    count: string;
}

export interface PostProps {
    id: number;
    image: string;
    category: PostCategoryEnums;
    title: string;
    shortRead?: string;
    date: string;
}
