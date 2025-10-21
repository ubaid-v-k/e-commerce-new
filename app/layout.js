import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'E-Commerce Store',
  description: 'Your one-stop shop for amazing products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-vh-100">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}