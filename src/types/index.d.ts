export {};

declare global {
  interface Window {
    particlesJS: {
      load: (value: string, optionsPath: string, onload: Function) => {};
    };
  }
}
