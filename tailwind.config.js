module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,ts,xml}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#865A7B",
                    50: "#E8DDE6",
                    100: "#DECEDA",
                    200: "#CAAFC3",
                    300: "#B591AC",
                    400: "#A17295",
                    500: "#865A7B",
                    600: "#67465F",
                    700: "#493143",
                    800: "#2A1D27",
                    900: "#0C080B",
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
