// import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledHeader, GlobalStyles } from "./styledComponent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useSelector, useDispatch } from "react-redux";

import { switchTheme } from "../../store/themeSlice";

const dark = {
  color: "white",
  backgroundColor: "black",
};

const light = {
  color: "black",
  backgroundColor: "white",
};

function Header() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  console.log(dispatch);

  // console.log(theme)
  // console.log("switchTheme: ", switchTheme)

  return (
    <>
      <GlobalStyles />

      <StyledHeader
        style={
          theme
            ? { color: dark.color, backgroundColor: dark.backgroundColor }
            : { color: light.color, backgroundColor: light.backgroundColor }
        }
      >
        <h1>Shopee</h1>
        <span>
          <ShoppingCartIcon />
          <span
            style={{ marginLeft: "20px" }}
            role="button"
            onClick={() => dispatch(switchTheme())}
          >
            {theme ? <WbSunnyIcon /> : <BedtimeIcon />}
          </span>
        </span>
      </StyledHeader>
    </>
  );
}

export default Header;
