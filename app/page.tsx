import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import Squares from "@/components/squares/Squares";
import styles from "../styles/mat.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            {/* <div className="min-w-2 w-full border-r-neutral-800 border-1 h-f"></div> */}
            <div className={styles.containerSecondary}>
                <div className={styles.containerStart}></div>
                <div className={styles.containerCenter}></div>
                <div className={styles.containerEnd}></div>
            </div>
            <div className={styles.containerMain}>
                <div className={styles.containerStart}></div>
                <div className={styles.containerCenter}>
                    <div className={styles.card}>
                        <div className={styles.cardAvatar}>
                            <Image
                                className={`opacity-70 mix-blend-plus-lighter h-full object-cover`}
                                width={224}
                                height={208}
                                src={"/avatar.png"}
                                alt={"avatar"}
                            />
                        </div>
                        <div className={styles.cardHeading}>
                            <div className={""}>
                                <h1 className="text-xl tracking-tight leading-none">
                                    João Pedro
                                </h1>
                                <h2
                                    className={`${styles.textAccent} text-xl tracking-tight leading-none`}
                                >
                                    Designer & Developer
                                </h2>
                                <p
                                    className={`${styles.textAccent} text-sm leading-none mt-2.5 mr-1`}
                                >
                                    Experienced in building web and mobile apps,
                                    landing pages, and scalable design systems.
                                </p>
                            </div>
                            <Link
                                href={"https://cal.com/talvezjoaopedro"}
                                target="_blank"
                                className={`${styles.cta}`}
                            >
                                <div className={`${styles.ctaLabel} flex-1`}>
                                    Start your project
                                </div>
                                <div className={styles.ctaArrow}>
                                    <Image
                                        src={"/arrow-right.svg"}
                                        alt={
                                            "Redirect to cal.com/talvezjoaopedro"
                                        }
                                        height={20}
                                        width={20}
                                    ></Image>
                                </div>
                            </Link>
                        </div>
                        <Squares></Squares>
                    </div>
                    <SocialLinks></SocialLinks>
                </div>
                <div className={styles.containerEnd}></div>
            </div>
            <div className={styles.containerSecondary}>
                <div className={styles.containerStart}></div>
                <div className={styles.containerCenter}></div>
                <div className={styles.containerEnd}></div>
            </div>
            {/* <div className="bg-neutral-800 flex justify-center rounded-4xl w-full max-w-lg flex-col items-center pt-8 p-6 gap-2.5">
                <Image
                    className="rounded-4xl"
                    width={120}
                    height={120}
                    src={"/jp.jpg"}
                    alt={"avatar"}
                />
                <h1 className="text-center text-2xl font-medium tracking-tight">
                    João Pedro Magalhães
                </h1>
                <h2 className="text-center text-neutral-400 font-medium tracking-tight">
                    Designer & Developer
                </h2>
                <SocialLinks></SocialLinks>
            </div> */}
        </div>
    );
}
