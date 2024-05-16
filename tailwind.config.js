/** @type {import('tailwindcss').Config} */
import { content as _content, plugin } from "flowbite-react/tailwind";
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js',
  _content(),];
export const theme = {
  extend: {},
};
export const plugins = [plugin(),];

