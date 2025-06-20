"use client";

import Image from "next/image";
import styles from "./Grid.module.scss";
import { useEffect, useRef, useState } from "react";

type Props = {
    direction: "ltr" | "rtl";
};

const Grid = ({ direction }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [squareCount, setSquareCount] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (ref.current) {
                const containerHeight =
                    ref.current.getBoundingClientRect().height;
                const newCount = Math.ceil(containerHeight / 80);
                setSquareCount(newCount);
                // console.log("New height:", containerHeight);
            }
        };

        window.addEventListener("resize", measure);
        measure(); // measure once on mount

        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <div
            ref={ref}
            className={`
                ${styles.grid}
                ${direction === "rtl" ? styles.rtl : styles.ltr}
            `}
        >
            {[...Array(squareCount)].map((_, i) => (
                <div
                    key={i}
                    className={`
                    ${styles.gridSquare}
                    ${direction === "rtl" ? styles.rtl : styles.ltr}
                `}
                >
                    <div className={styles.gridNumber}>{i + 1}</div>
                    <Image
                        height={66}
                        width={20}
                        src="dash-border.svg"
                        alt="dashed border"
                        className={styles.gridBorder}
                    ></Image>
                </div>
            ))}
        </div>
    );
};

export default Grid;
