import { Inter } from "next/font/google";
import "../Styles/globals.css";
import Styles from "../Styles/page.module.css";
const inter = Inter({ subsets: ["latin"] });
import styles from "../Styles/login.moudule.css";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>App2</title>
            </head>
            <body>
                <section >
                    <div className={Styles.main}>{children}</div>
                </section>
            </body>
        </html>
    );
}
