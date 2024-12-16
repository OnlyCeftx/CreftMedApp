import React from "react";

export function Logo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zm1.47 4.428c0-.217.176-.392.393-.392h1.275c.216 0 .392.175.392.392v1.56h1.56c.217 0 .392.176.392.392v1.275a.39.39 0 0 1-.392.393H8.03v1.56a.39.39 0 0 1-.392.392H6.362a.39.39 0 0 1-.392-.392v-1.56H4.41a.39.39 0 0 1-.392-.393V7.38c0-.216.175-.392.392-.392h1.56z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}