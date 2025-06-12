import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

interface socialLink {
    label: string;
    url: string;
    icon: string;
}

const socials: socialLink[] = [
    {label: "Twitter", url: "https://x.com/talvezjoaopedro", icon: "vercel.svg"},
    {label: "GitHub", url: "https://github.com/talvezjoaopedro", icon: "vercel.svg"},
    {label: "Linked In", url: "https://linkedin.com/in/talvezoaopedro", icon: "vercel.svg"},
    {label: "Layers", url: "https://layers.to/talvezjoaopedro", icon: "vercel.svg"}
];


const SocialLinks = () => {
    const listItems = socials.map((social, index) =>
        <Link key={index} target="_blank" className="flex gap-3 items-center justify-center p-4 rounded-2xl bg-neutral-950 hover:bg-lime-400 transition-all duration-150 text-neutral-50 hover:text-neutral-950 focus:outline-1 focus:outline-offset-2 outline-lime-500 active:bg-lime-700" href={social.url}>
            {/* <Image src={social.icon} height={16} width={16} alt={social.label}></Image> */}
            <p>{social.label}</p>
        </Link>
    );

    return (
        <div className="mt-4 flex flex-col w-full gap-1.5">
            {listItems}
        </div>
    )
}

export default SocialLinks;