declare global {
  interface Window {
    particlesJS: {
      load: (value: string, optionsPath: string, onload: Function) => {};
    };
  }
}

type option = {
  title: string;
  link: string;
};

export {option};