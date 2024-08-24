import { Inter } from "next/font/google";
import "./Styles/globals.css";
import styles from "@/app/Styles/main.module.css";
<<<<<<< HEAD
import Navbar from "./Components/NavBar.js";
=======
import Navbar from "./components/NavBar";
>>>>>>> a1e1fcdd6300edb8ebaee823f03a0ba1e7e8f819

const inter = Inter({ subsets: ["latin"] });

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
