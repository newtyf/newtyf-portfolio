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
  styleCustom?: boolean
};

type job = {
  title: string,
  description: string[],
  role: string,
  start: string,
  end: string
}

export {option, job};