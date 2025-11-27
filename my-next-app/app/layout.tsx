

import "./globals.css";

export const metadata = {
  title: "3D Homepage",
  description: "Interactive 3D globe UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
  