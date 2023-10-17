/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      0.3: "0.3px",
      0.5: "0.5px",
      1: "1px",
    },
    borderRadius: {
      20: "20px",
      10: "10px",
      full: "9999px",
      30: "30px",
      40: "40px",
      50: "50px",
      5: "5px"
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: "18px",
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      "32px": "32px",
      "36": "36px",
      '4xl': '42px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkGrey: "#757575",
        brightGrey: "#D9D9D9",
        buttonShadow: "rgba(248, 248, 248, 0.08)",
        lightGrey: "#FDFDFD",
        gradientBlue: "rgba(2, 125, 255, 0.90)",
        gradientPurple: "rgba(140, 1, 232, 0.90)",
        gradientIndigo: "#6275E9",
        lightBlue: "#027DFF",
        brandTint: "#F4F5FD",
        mainGrey: "#C4C4C4",
        whiteTint: "#FBFBFB",
        lightGray: "#F8F8F8",
        brightGray: "#F4F4F4",
        mainBlack: "#121212"
      },
      height: {
        "500px": "500px",
        460: "420px",
        "310px": "310px",
        300: "300px",
        "360px": "360px",
        280: "350px",
        512: "500px",
        540: "563px",
        500: "460px",
        "450px": "450px",
        440: "380px",
        364: "364px",
        398: "398px",
        357: "357px",
        "473px": "473px",
        "460px": "460px",
        429: "429px",
        "402px": "402px",
        840: "840px",
        920: "771px",
        "460px": "460px",
        "420px": "420px",
        416: "416px",
        374: "374px",
        332: "332px",
        "315px": "315px",
        230: "230px",
        210: "210px",
        215: "215px",
        "180px": "180px",
        "160px": "160px",
        "139px":"139px",
        75: "75px",
        42: "42px"
      },
      width: {
        "675px": "675px",
        "635px": "635px",
        "500px": "500px",
        500: "460px",
        562: "562px",
        "529px": "529px",
        "525px": "525px",
        "511px":"511px",
        "479px": "479px",
        "450px": "450px",
        440: "400px",
        "415px": "415px",
        400: "400px",
        "360px": "360px",
        "300px": "300px",
        280: "350px",
        353: "353px",
        398: "398px",
        "347px": "347px",
        429: "429px",
        270: "270px",
        220: "220px",
        230: "230px",
        "180px": "180px",
        170: "170px",
        198: "198px",
        66: "66%",
        "50%": "50%",
        "45%":"45%",
        "10%":"10%",
        28: "28%",
        "4px": "4px"
      },
      maxWidth: {
        "1536px": "1536px",
        525: "525px",
        675: "675px",
        "595px": "595px",
        530: "530px",
        521: "521px",
        "511px":"511px",
        506: "506px",
        "479px": "479px",
        "477px": "477px",
        "452px": "452px",
        446: "446px",
        429: "429px",
        "415px": "415px",
        411: "411px",
        327: "327px",
        320: "320px",
        309: "309px",
        562: "562px",
        "232px": "232px",
        "93%": "93%",
      },
      maxHeight: {
        367: "367px",
      }
      ,
      lineHeight: {
        52: "52px",
        42: "42px"
      },
      minHeight: {
        563: "563px",
        308: "308px",
      },
      minWidth: {
        675: "675px",
        "595px": "595px",
        525: "525px",
        562: "562px",
        "511px":"511px",
        "415px": "415px",

      },
      padding: {
        "4px": "4px",
        "2px": "2px",
        "7px": "7px",
        "18px": "18px",
        "72px": "72px",
        "120px": "120px",
        "122px": "122px",
        "97px": "97px"
      },
      spacing: {
        "11px": "11px",
        "26px": "26px",
        "29px": "29px"
      },
      margin: {
        "97px": "97px"
      }
    },
  },
  plugins: [],
}
