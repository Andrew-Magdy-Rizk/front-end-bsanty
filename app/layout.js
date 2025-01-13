import { Roboto, Cairo } from "next/font/google";
import "./globals.css";
import ProviderWrap from "./_rtk/ProviderWrap";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700"],
  preload: true,
});

export const metadata = {
  title: "Crafts - مكتبة كرافتس",
  description: "مكتبة كرافتس المتكاملة لتوزيع الجملة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className} dark:bg-gray-900 antialiased`}>
        <ProviderWrap>{children}</ProviderWrap>
      </body>
    </html>
  );
}
