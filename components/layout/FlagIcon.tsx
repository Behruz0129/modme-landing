type FlagCode = "uz" | "en" | "ru";

const flags: Record<FlagCode, React.ReactNode> = {
    uz: (
        <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="16" fill="#fff" />
            <rect width="24" height="5" fill="#0099b5" />
            <rect y="11" width="24" height="5" fill="#1eb53a" />
            <rect y="4.7" width="24" height="0.7" fill="#ce1126" />
            <rect y="10.6" width="24" height="0.7" fill="#ce1126" />
            <path
                d="M4.6 2.5a1.6 1.6 0 1 0 0 3.2 1.4 1.4 0 1 1 0-3.2z"
                fill="#fff"
            />
        </svg>
    ),
    en: (
        <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="flag-en-s">
                <path d="M0 0v30h60V0z" />
            </clipPath>
            <clipPath id="flag-en-t">
                <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
            </clipPath>
            <g clipPath="url(#flag-en-s)">
                <path d="M0 0v30h60V0z" fill="#012169" />
                <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
                <path
                    d="M0 0 60 30M60 0 0 30"
                    clipPath="url(#flag-en-t)"
                    stroke="#c8102e"
                    strokeWidth="4"
                />
                <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
            </g>
        </svg>
    ),
    ru: (
        <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="16" fill="#fff" />
            <rect y="5.33" width="24" height="5.33" fill="#0039a6" />
            <rect y="10.66" width="24" height="5.34" fill="#d52b1e" />
        </svg>
    ),
};

export default function FlagIcon({
    code,
    className = "",
}: {
    code: FlagCode;
    className?: string;
}) {
    return (
        <span
            className={`inline-block w-5 aspect-[3/2] overflow-hidden rounded-[3px] ring-1 ring-black/10 shrink-0 [&>svg]:h-full [&>svg]:w-full [&>svg]:block ${className}`}
        >
            {flags[code]}
        </span>
    );
}
