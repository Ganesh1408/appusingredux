import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  StyledHeader,
  GlobalStyles,
  UnorderList,
  List,
  InnerItems,
  IconSpan,
  OuterSpan,
  WishInnerItems,
} from "./styledComponent";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
// import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/slice/themeSlice";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { ProductsList } from "../../ProductsList/productsList";
// import {   fetchProducts,  } from "../../store/slice/productSlice";

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
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   // dispatch({
  //   //   type:'api/makecall',
  //   //   payload:{                //custom middleware
  //   //     url:"/products  ",
  //   //     onStart:fetchLoading.type,
  //   //     onSuccess:updateAllProducts.type ,
  //   //     onError:fetchError.type

  //   //   }

  //   // })
  //   dispatch(fetchProducts())
  // },[])

  const theme = useSelector((state) => state.theme.theme);
  const cartItems = useSelector((state) => state.cartItems.list);
  // (cartItems);
  const wishList = useSelector((state) => state.wishList.list);

  const no_of_cartItems = cartItems.length;
  const no_of_wishListItems = wishList.length
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
       <Link to="/products" style={{textDecoration:"none",color:"inherit"}}> <h1>Shopee</h1></Link>
        <UnorderList>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/products"
          >
            <List tabIndex={0}>Products</List>
          </Link>

          {no_of_wishListItems > 0 ? (
            <Link to="/wishList">
             <OuterSpan>
              <List>
                <FavoriteIcon sx={{ color: "red" }} />
                
                  {no_of_wishListItems >0 &&
                  <WishInnerItems
                  
                  >
                    <span style={{ position: "relative", top: "2px" }}> {no_of_wishListItems}</span>
                    </WishInnerItems>
                    }
                  
                
              </List>
              </OuterSpan>
            </Link>
          ) : (
            <Link to="/wishList">
              <List>
                <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />
              </List>
            </Link>
          )}

         
          <OuterSpan>
            <List>
            <Link to="/Cart" style={{ textDecoration: "none", color: "inherit" }}>
              <ShoppingCartIcon />
              </Link>
                {no_of_cartItems > 0 && (
                  <InnerItems
                    style={
                      theme
                        ? { backgroundColor: light.backgroundColor, color: light.color ,transition:light.transition}
                        : { backgroundColor: dark.backgroundColor, color: dark.color ,transition:dark.transition }
                    }
                  >
                    <span style={{ position: "relative", top: "2px" }}>
                      {no_of_cartItems}
                    </span>
                  </InnerItems> 
                )}
              
              
              <IconSpan
                tabIndex={0}
                role="button"
                style={{ marginLeft: "20px" }}
                onClick={() => dispatch(switchTheme())}
              >
                {theme ? <WbSunnyIcon /> : <BedtimeIcon />}
              </IconSpan>
              
            </List>
            </OuterSpan>
          
        </UnorderList>
      </StyledHeader>
    </>
  );
}

export default Header;
