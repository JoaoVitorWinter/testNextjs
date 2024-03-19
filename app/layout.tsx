import '@/app/global.css';
import Header from './(components)/layout/Header';
import  { montserrat} from './font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
