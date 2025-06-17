import Link from "next/link";
import React from "react";
import linkStyles from "./socialLinks.module.scss";
import styles from "/styles/mat.module.scss";
import Squares from "../squares/Squares";
// import Image from 'next/image';

interface socialLink {
    label: string;
    url: string;
    icon: string;
}

const socials: socialLink[] = [
    {
        label: "Portfolio",
        url: "https://talvezjoaopedro.framer.website",
        icon: "vercel.svg",
    },
    {
        label: "GitHub",
        url: "https://github.com/talvezjoaopedro",
        icon: "vercel.svg",
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/talvezjoaopedro/",
        icon: "vercel.svg",
    },
    {
        label: "Layers",
        url: "https://layers.to/talvezjoaopedro",
        icon: "vercel.svg",
    },
];

const SocialLinks = () => {
    const listItems = socials.map((social, index) => (
        <Link
            key={index}
            target="_blank"
            className={linkStyles.linkItem}
            href={social.url}
        >
            {/* <Image src={social.icon} height={16} width={16} alt={social.label}></Image> */}
            <p>{social.label}</p>
        </Link>
    ));

    return (
        <div className={linkStyles.linkList}>
            {listItems}
            <Squares></Squares>
        </div>
    );
};

export default SocialLinks;
