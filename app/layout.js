import { Inter } from "next/font/google";
import "./Styles/globals.css";
import styles from "@/app/Styles/main.module.css";
import Navbar from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
s
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </body>
    </html >
  );
}
