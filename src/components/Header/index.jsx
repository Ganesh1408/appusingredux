import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledHeader,
  GlobalStyles,
  UnorderList,
  List,
  InnerItems,
  IconSpan,
  OuterSpan,
} from "./styledComponent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/slice/themeSlice";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect } from "react";
// import { ProductsList } from "../../ProductsList/productsList";
import {   fetchProducts,  } from "../../store/slice/productSlice";

const dark = {
  color: "white",
  backgroundColor: "black",
  transition: "0.35s ease-in-out",
};

const light = {
  color: "black",
  backgroundColor: "white",
  transition: "0.35s ease-in-out",
};

function Header() {
  const dispatch=useDispatch()

  useEffect(()=>{
    // dispatch({
    //   type:'api/makecall',
    //   payload:{                //custom middleware
    //     url:"/products  ",
    //     onStart:fetchLoading.type,
    //     onSuccess:updateAllProducts.type ,
    //     onError:fetchError.type
      
    //   }
       
    // })
    dispatch(fetchProducts())
  },[])

  const theme = useSelector((state) => state.theme.theme);
  const cartItems = useSelector((state) => state.cartItems.list);
  // (cartItems);
  const wishList= useSelector((state)=>state.wishList.list);
  
  
  const no_of_cartItems = cartItems.length;
  // (no_of_cartItems);
  // const dispatch = useDispatch();

  // (dispatch);

  return (
    <>
      <GlobalStyles />

      <StyledHeader
        style={
          theme
            ? {
                color: dark.color,
                backgroundColor: dark.backgroundColor,
                transition: dark.transition,
              }
            : {
                color: light.color,
                backgroundColor: light.backgroundColor,
                transition: light.transition,
              }
        }
      >
        <h1>Shopee</h1>
        <UnorderList>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/products"
          >
            <List tabIndex={0}>Products</List>
          </Link>
          
          { wishList.length > 0 ?
          (<Link  to="/wishList"> 
            <List>
              <FavoriteIcon sx={{color:"red"}}/>
            </List>
          </Link>)
          :
            (<Link to ="/wishList">
            <List>
              <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
            </List>
          </Link>)
          }
          

          <List>
            <ShoppingCartIcon />
            <OuterSpan>
              {no_of_cartItems > 0 && (
                <InnerItems
                  style={
                    theme
                      ? { backgroundColor: "white", color: "black" }
                      : { backgroundColor: "black", color: "white" }
                  }
                >
                  <span style={{ position: "relative", top: "2px" }}>
                    
                    {no_of_cartItems}
                  </span>
                </InnerItems>
              )}
            </OuterSpan>

            <IconSpan
              tabIndex={0}
              role="button"
              style={{ marginLeft: "20px" }}
              onClick={() => dispatch(switchTheme())}
            >
              {theme ? <WbSunnyIcon /> : <BedtimeIcon />}
            </IconSpan>
          </List>
        </UnorderList>
      </StyledHeader>
    </>
  );
}

export default Header;
