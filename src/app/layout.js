import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import "./globals.css";
import AuthProvider from "../context/AuthProvider"
import QueryProvider from "../context/QueryProvider"

export const metadata = {
  title: "Car Doctor Pro || CodeWithSaidul",
  description: "Car Doctor Pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body>
        <QueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
