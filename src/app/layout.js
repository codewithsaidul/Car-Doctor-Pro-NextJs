import Navbar from "@/components/Shared/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
