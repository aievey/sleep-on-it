import "./globals.css";
import Routes from "@/components/navigation";

export const metadata = {
  title: "Sleep on it!",
  description: "The best productive learning app on the market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Routes />
        <main>{children}</main>
      </body>
    </html>
  );
}
