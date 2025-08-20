import React, { useEffect } from 'react';
import App from '../App';

// Web版用のラッパーコンポーネント
export default function WebApp() {
  useEffect(() => {
    // Chrome拡張機能のエラーを無視
    const suppressExtensionErrors = () => {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        const errorMessage = args[0]?.toString() || '';
        // Chrome拡張機能関連のエラーを無視
        if (
          errorMessage.includes('content.js') ||
          errorMessage.includes('message port closed') ||
          errorMessage.includes('Extension context') ||
          errorMessage.includes('chrome-extension://')
        ) {
          return;
        }
        originalConsoleError.apply(console, args);
      };
    };

    suppressExtensionErrors();
  }, []);

  return <App />;
}