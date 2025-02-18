'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@widgets/Header';
import Footer from '@widgets/Footer';
import Sidebar from '@modules/Portal/partials/Sidebar/Sidebar';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     router.push('/login');
  //   } else {
  //     setIsAuthenticated(true);
  //   }
  //   setLoading(false);
  // }, [router]);

  // if (loading)
  //   return (
  //     <div className="h-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // if (!isAuthenticated) return null;

  return (
    <html lang="en">
      <body className="no-scrollbar max-w-[2400px] mx-auto">
        <Header />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 mt-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
