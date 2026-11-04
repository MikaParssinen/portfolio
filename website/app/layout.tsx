import "./globals.css";
import { Nav } from "./components/nav";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark scroll-smooth ${inter.variable}" >
      <body className="bg-background text-foreground">
        <div className="mx-auto flex max-w-5xl gap-12 px-6">
          <aside className="sticky top-0 hidden h-screen w-48 shrink-0 py-12 md:block">
            <Nav />
          </aside>
          <main className="min-w-0 flex-1 py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}