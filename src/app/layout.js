import ReduxProvider from './store/reduxProvider';
import Navbar from '@/components/layout/navbar';
import './globals.css';

export const metadata = {
  title: 'Perla Labs',
  description: 'Perla labs portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'font-mts-regular'}>
        {/* Proveedor que administra el estado global a los componentes hijos */}
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}