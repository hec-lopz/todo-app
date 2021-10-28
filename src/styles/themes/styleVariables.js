// Themes are meant to be used this way?

const globalVariables = {
  fontFamily: '"Josefin Sans", sans-serif',
  colors: {
    white: "#FFF",
    gradient: "linear-gradient(135deg, #5DF 0%, #C058F3 100%)",
    selectedText: "#3A7CFD",
    borderColor: "#979797",
  },
};

export const darkTheme = {
  ...globalVariables,
  background: {
    color: "#171823",
    desktopImage: 'url("/images/bg-desktop-dark.jpg")',
    mobileImage: 'url("/images/bg-mobile-dark.jpg")',
  },
  fontColors: {
    primary: "#C8CBE7",
    secondary: "#767992",
    grayed: "#4D5067",
  },
  listItem: {
    background: "#25273D",
    border: "#393A4B",
  },
};

export const lightTheme = {
  ...globalVariables,
  background: {
    color: "#F2F2F2",
    listItem: "FFFFFF",
    desktopImage: 'url("/images/bg-desktop-light.jpg")',
    mobileImage: 'url("/images/bg-mobile-light.jpg")',
  },
  fontColors: {
    primary: "#494C6B",
    secondary: "#9495A5",
    grayed: "#D1D2DA",
  },
  listItem: {
    background: "#FFFFFF",
    border: "#E3E4F1",
  },
};
