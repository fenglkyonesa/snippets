'use client';
import { BACKGROUND_OPTIONS } from './components/background';
import { Button } from '@/components/ui/button';
import Playground from './components/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
      <Toaster />
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {preview ? preview : null}
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="pt-12">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
              Collection of modern,{' '}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background snippets
              </span>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Ready-to-use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS and{' '}
              <span className="cursor-wait opacity-70">Vanilla CSS</span> for
              easy integration.
            </p>
            <div className="mt-10 flex gap-4">
              <Button variant="secondary" onClick={resetBg}>
                Reset background
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden px-4 pb-20 pt-32 md:px-10">
          <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-3 lg:grid-cols-4">
            {BACKGROUND_OPTIONS.map(background => (
              <Playground
                key={background.name}
                setPreview={setPreview}
                theme={background.theme}
                setTheme={setTheme}
              >
                {background.component}
              </Playground>
            ))}
          </div>
        </div>
      </div>

      {/* 手机预览部分 */}
      <Button
        variant="ghost"
        onClick={handleButtonClick}
        className={
          'fixed bottom-10 right-1 w-8 h-8 md:bottom-96  lg:w-10 lg:h-10 border rounded-full border-gray-300 '
        }
      >
        👀
      </Button>
      {isVisible && (
        <div
          className="fixed bottom-0 lg:top-1 xl:top-44 right-10  w-[315px] h-[637px]
         border-8 rounded-[30px] outline outline-offset-2 outline-gray-500 border-black z-50    overflow-hidden"
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              {preview ? preview : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
