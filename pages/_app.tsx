import '@/styles/globals.css';
import Axios from 'axios';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth';

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';

  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
