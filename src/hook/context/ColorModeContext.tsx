import React from 'react';
import PropTypes from 'prop-types';
type ColorModeContextProps = {
  children: {};
};
// export const ColorModeContext = React.createContext(Array);
// const ColorModeContextProvider = ({ children }) => {

type ContextProps = {
  colorMode: string;
  setColorMode?: (value: string) => void;
};

export const ColorModeContext = React.createContext<Partial<ContextProps>>({
  colorMode: 'light',
  setColorMode: () => {},
});

const ColorModeContextProvider = (props: ColorModeContextProps) => {
  const { children } = props;
  const [colorMode, setColorMode] = React.useState<string>('light'); // light, dark
  return <ColorModeContext.Provider value={{ colorMode, setColorMode }}>{children}</ColorModeContext.Provider>;
};
ColorModeContextProvider.propTypes = {
  children: PropTypes.object,
};
export default ColorModeContextProvider;

export const useColorMode = () => React.useContext(ColorModeContext);
