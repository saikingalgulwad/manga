
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {Outfit} from "next/font/google"


const outfit=Outfit({subsets:['latin']});



export const metadata = {
  title: "Hindi Manga",
  description: "Hindi Manga . Saiprasad Algulwad",
};

export default function RootLayout({ children }) {
  return (<ClerkProvider>
    <html lang="en">
    <head>
    <link rel='icon' type='image/webp' href='"@/public/logo.webp"'/>
    </head>
      <body
       className={outfit.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
