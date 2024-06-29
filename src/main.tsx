import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalProvider } from './context/ModalContext.tsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import ErrorBoundary from "./components/ErrorBoundary.tsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ModalProvider>
        <ErrorBoundary>

          <App />
        </ErrorBoundary>
      </ModalProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
