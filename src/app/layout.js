import Navbar from "@/components/Shared/Navbar";
import "./globals.css";
import Footer from "@/components/Shared/Footer";

export const metadata = {
  title: "Car Doctor Pro || CodeWithSaidul",
  description: "Car Doctor Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
