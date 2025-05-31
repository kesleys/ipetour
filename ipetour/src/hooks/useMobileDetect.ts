// src/hooks/useMobileDetect.ts
import { useState, useEffect } from 'react';

const useMobileDetect = (breakpoint: number = 1024): boolean => {
  // Verifica o tamanho inicial da janela
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Adiciona o listener para redimensionamento
    window.addEventListener('resize', checkDevice);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]); // Re-executa o efeito se o breakpoint mudar

  return isMobile;
};

export default useMobileDetect;