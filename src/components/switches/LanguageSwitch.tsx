"use client"
// COMPONENTS
import MoonLoopSvg from '@/components/svgs/MoonLoopSvg';
import SunLoopSvg from '@/components/svgs/SunLoopSvg';

// STORE
import { useLanguageStore } from '@/store/index';

// export default function ThemeSwitch ({ currentLanguage = 'light' }: { theme: string}) {
export default function LanguageSwitch () {

  const { currentLanguage, setCurrentLanguage } = useLanguageStore(); 
  const isEn = currentLanguage === 'en';

  return (
    <div
      className={`
        relative w-[4rem] h-[1.5rem] bg-[var(--background-light-color)] rounded-[3rem] cursor-pointer  overflow-hidden
        before:content-[''] before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] 
        before:w-[100%] before:h-[100%] before:rounded-[2rem] 
        before:opacity-60 before:blur-[3px]
        before:border-solid before:border-[var(--background-light-invert-color)] before:border-[2px]
        before:transition-all before:duration-500 before:ease-[var(--bounce-bezier)]
        ${currentLanguage === 'light' ? 'bg-cyan-200' : 'bg-cyan-800'}
      `}
      onClick={() => setCurrentLanguage(currentLanguage === 'en' ? 'ar' : 'en')}
    >
      <div
        className={`
          absolute top-[50%] translate-y-[-50%] 
          h-[calc(1.5rem-4px)] w-[calc(1.5rem-4px)] aspect-[1:1]
          flex items-center justify-center
          rounded-[100%] bg-[var(--background-color)] shadow-md
          transition-all duration-500 ease-[var(--bounce-bezier)]
         ${isEn ? 'left-[2px]' : 'left-[calc(100%-1.5rem+2px)]'}
        `}
      >
        {isEn 
          ? <SunLoopSvg
              width="12px" height="12px" color="var(--font-heading-color)"
            />
          : <MoonLoopSvg
              width="12px" height="12px" color="var(--font-heading-color)"
            />
        }
        <span
          className="
          absolute top-[50%] translate-y-[-50%] left-[calc(100%+0.3rem)]
          text-body text-xs font-bold"
        >
          En
        </span>
        <span
          className="
          absolute top-[50%] translate-y-[-50%] right-[calc(100%+0.3rem)]
          text-body text-xs font-bold"
        >
          Ar
        </span>
      </div>
    </div>
  )
}