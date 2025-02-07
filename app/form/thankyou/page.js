"use client";

import { useRouter } from "next/navigation";
import styles from "./thanks.module.css"; // Assuming you're using a CSS module

export default function ThankYou() {
    const router = useRouter();

    return (
        <div className={styles.thankYouContainer}>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
            🎉 You are now officially part of the Photobooth Contest! <br />
            Your account has been successfully created, and in the future, you will be able to log in and access your profile.
        </p>
        <button
            className={styles.backButton}
            onClick={() => router.push("/photobooth")} 
        >
            Continue
        </button>
        </div>
    );
}
