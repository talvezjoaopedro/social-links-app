import Link from "next/link";
import React from "react";
import styles from "./SocialLinks.module.scss";
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
            className={styles.linkItem}
            href={social.url}
        >
            <div className={styles.linkItemStart}>
                <p>{social.label}</p>
            </div>
            <div className={styles.linkItemEnd}>
                <p>{social.label}</p>
            </div>
        </Link>
    ));

    return (
        <div className={styles.linkList}>
            {listItems}
            <Squares></Squares>
        </div>
    );
};

export default SocialLinks;
