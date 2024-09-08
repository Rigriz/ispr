import { Inter } from "next/font/google";
import "../Styles/globals.css";
import Styles from "../Styles/page.module.css";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>App2</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
