
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledHeader, GlobalStyles,UnorderList,List} from "./styledComponent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useDispatch, useSelector } from "react-redux"; 
import { switchTheme } from "../../store/slice/themeSlice";
import { Link } from "react-router-dom";




const dark = {
  color: "white",
  backgroundColor: "black",
  transition: "0.35s ease-in-out"
};

const light = {
  color: "black",
  backgroundColor: "white",
  transition: "0.35s ease-in-out"
};

function Header() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  // console.log(dispatch);

  return (
    <>
      <GlobalStyles />

      <StyledHeader
        style={
          theme
            ? { color: dark.color, backgroundColor: dark.backgroundColor,transition:dark.transition }
            : { color: light.color, backgroundColor: light.backgroundColor,transition:light.transition }
        }
      >
        <h1>Shopee</h1>
        <UnorderList>
          <Link  to='/products'>
          <List>
            Products
            </List>
          </Link>
          <List>
          <span>
          <ShoppingCartIcon />
          <span
            style={{ marginLeft: "20px" }}
            role="button"
            onClick={() => dispatch(switchTheme())}
          >
            {theme ? <WbSunnyIcon /> : <BedtimeIcon  />}
          </span>
        </span>
          </List>
        </UnorderList>
        
      </StyledHeader>
    </>
  );
}

export default Header;
