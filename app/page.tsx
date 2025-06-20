import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import Squares from "@/components/squares/Squares";
import styles from "../styles/mat.module.scss";
import Grid from "@/components/grid/Grid";

export default function Home() {
    return (
        <div className={styles.container}>
            <div
                className={`${styles.containerSecondary} ${styles.containerTop}`}
            >
                <div className={styles.containerStart}>
                    <Grid direction="ltr"></Grid>
                </div>
                <div className={`${styles.containerCenter}`}>
                    <div className="relative h-full overflow-hidden m-4 -mt-4">
                        <Image
                            src={"grid.svg"}
                            alt="grid"
                            height={634}
                            width={448}
                            className="absolute bottom-0 left-0"
                        ></Image>
                        <Image
                            src={"animation-1.svg"}
                            alt="grid"
                            height={634}
                            width={448}
                            className="absolute bottom-0.5 left-0"
                        ></Image>
                    </div>
                </div>
                <div className={styles.containerEnd}>
                    <Grid direction="rtl"></Grid>
                </div>
            </div>
            <div className={styles.containerMain}>
                <div className={styles.containerStart}>
                    <Grid direction="ltr"></Grid>
                </div>
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
                                    className={`${styles.textAccent} text-sm leading-none mt-2.5 mr-1 hidden xl:block`}
                                >
                                    Experienced in building web and mobile apps,
                                    landing pages, and scalable design systems.
                                </p>

                                <p
                                    className={`${styles.textAccent} text-sm leading-none mt-2.5 mr-1 xl:hidden`}
                                >
                                    Web and mobile apps, landing pages, and
                                    scalable design systems.
                                </p>
                            </div>
                            <Link
                                href={"mailto:joaopedro@kunskap.studio"}
                                target="_blank"
                                className={`${styles.cta}`}
                            >
                                <div
                                    className={`${styles.ctaLabel} flex-1 whitespace-nowrap hidden xl:block`}
                                >
                                    Start your project
                                </div>
                                <div
                                    className={`${styles.ctaLabel} flex-1 whitespace-nowrap xl:hidden`}
                                >
                                    Start project
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
                <div className={styles.containerEnd}>
                    <Grid direction="rtl"></Grid>
                </div>
            </div>
            <div
                className={`${styles.containerSecondary} ${styles.containerBottom}`}
            >
                <div className={styles.containerStart}>
                    <Grid direction="ltr"></Grid>
                </div>
                <div className={`${styles.containerCenter} pt-4`}>
                    <div className="relative h-full overflow-hidden mx-4">
                        <Image
                            src={"grid.svg"}
                            alt="grid"
                            height={634}
                            width={448}
                            className="absolute top-0 left-0"
                        ></Image>
                        <Image
                            src={"animation-2.svg"}
                            alt="grid"
                            height={634}
                            width={448}
                            className="absolute top-0.5 left-0"
                        ></Image>
                    </div>
                </div>
                <div className={styles.containerEnd}>
                    <Grid direction="rtl"></Grid>
                </div>
            </div>
        </div>
    );
}
