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
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-WCHQQDFS")}
        </script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={`${cairo.className} dark:bg-gray-900 antialiased`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WCHQQDFS"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <ProviderWrap>{children}</ProviderWrap>
      </body>
    </html>
  );
}
