import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import "./globals.css";
import AuthProvider from "../context/AuthProvider"

export const metadata = {
  title: "Car Doctor Pro || CodeWithSaidul",
  description: "Car Doctor Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
