import "./globals.css";

export const metadata = {
  title: "Nagad Computer Wholesaler",
  description: "Best wholesale rates for computers and IT hardware.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
