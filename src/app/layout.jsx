import './globals.css';
import RecoilRootProvider from '@/util/recoilRootProvider';
import TanstackProvider from '@/util/tanstackProvider';
import MixpanelProvider from './_components/MixpanelProvider';
import GTMProvider from './_components/GTMProvider';
import TagManager from 'react-gtm-module';
import Script from 'next/script';

const GTM_CODE = `GTM-${process.env.NEXT_PUBLIC_GTM_CODE}`;

export const metadata = {
  title: 'OTTE',
  description: 'Generated by create i5j5',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=GA-MEASUREMENT-ID" />
      </head>
      <body suppressHydrationWarning={true}>
        <GTMProvider>
          <RecoilRootProvider>
            <TanstackProvider>{children}</TanstackProvider>
          </RecoilRootProvider>
        </GTMProvider>
      </body>
    </html>
  );
}
