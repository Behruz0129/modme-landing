export interface NavLink {
    name: string;
    href: string;
}

export interface Testimonial {
    name: string;
    position: string;
    image: string;
    text: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface WithdrawMethod {
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface TeamMember {
    name: string;
    position: string;
    image: string;
    description: string;
}

export interface Founder {
    name: string;
    position: string;
    image: string;
    description: string;
    social: {
        linkedin?: string;
        twitter?: string;
    };
}

export interface HistoryItem {
    year: string;
    title: string;
    description: string;
    image: string;
}

export interface Value {
    title: string;
    description: string;
    icon: React.ReactNode;
}
