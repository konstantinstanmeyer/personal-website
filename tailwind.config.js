/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "keyboard-app": "url('https://res.cloudinary.com/practicaldev/image/fetch/s--btxMy5Lb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4f9evwutdklfox9dr8y.png')"
      },
    },
  },
  plugins: [],
}
