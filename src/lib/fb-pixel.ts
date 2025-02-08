declare global {
    interface Window {
      fbq: (...args: any[]) => void;
      _fbq?: typeof window.fbq;
    }
  }
  
  export const initFacebookPixel = (pixelId: string) => {
    if (typeof window !== "undefined") {
      window.fbq =
        window.fbq ||
        function (...args) {
          (window.fbq as any).callMethod
            ? (window.fbq as any).callMethod.apply(window.fbq, args)
            : (window.fbq as any).queue.push(args);
        };
  
      window._fbq = window.fbq; // Explicitly assign _fbq
      (window.fbq as any).push = window.fbq;
      (window.fbq as any).loaded = true;
      (window.fbq as any).version = "2.0";
      (window.fbq as any).queue = [];
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    }
  };
  