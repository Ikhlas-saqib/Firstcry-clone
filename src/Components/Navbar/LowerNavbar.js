import React from 'react';
import { Box, Heading, HStack,Image, Menu, MenuButton, MenuItem, MenuList, Button, Input } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlHandbag} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';

function LowerNavbar() {
  let responsiveNav = {
       display: "flex",
       backgroundColor: "rgb(254,221,0)",
       justifyContent: "center",
       flexWrap: "wrap"
  }

  let navigate = useNavigate();
   
  const handleNavigation = (path)=>{
     navigate(path)
  }
    return (
        <div style={responsiveNav}>
          {/* <Box bg='rgb(254,221,0)'> */}
        <div style={{width:"80%"}}>
        <HStack >
      
      <Box>
      <Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} rightIcon={<ChevronDownIcon />}>
        ALL CATEGORIES
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>BOY FASHION</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> GIRL FASHION</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}> FOOTWEAR</MenuItem>
        {/* <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> TOYS</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> DIAPERING</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>  GEAR</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> FEEDING</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> BATH </MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>BOUTIQUES</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}>  NURSERY</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/boys-clothes")}}> HEALTH & SAFETY </MenuItem> */}

      </MenuList>
    </Menu>
      </Box>

      <Box>
      <Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
        GIRLS FASHION
      </MenuButton>
      <MenuList>
      <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_girl_winter_271022.jpg"/>
      </MenuItem>
      <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>   Sweaters NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> Thermals NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Ethnic Wear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Party Wear NEW</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Onesies & Rompers</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Pajamas & Leggings</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>
        Nightwear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Jumpsuits & Dungarees</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Athleisure & Sportswear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}>Shorts & Skirts</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/girls-clothes")}}> Socks & Tights</MenuItem>

      </MenuList>
    </Menu>
      </Box>


      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
          FOOT WEAR
      </MenuButton>
      <MenuList>
      <MenuItem><Image width='60%' src="https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_footwear_winter_271022.jpg"/></MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Casual Shoes</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>   Sandals</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>    Booties</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Bellies & Peep Toes</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}>Formal & Party Wear</MenuItem>
        <MenuItem onClick={()=>{handleNavigation("/products/Footwear")}}> Clogs</MenuItem>

      </MenuList>
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
      TOYS
      </MenuButton>
      
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        DIAPERING
      </MenuButton>
      
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button} >
        GEAR
      </MenuButton>
      
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        FEEDING
      </MenuButton>
      
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        BATH
      </MenuButton>
      
    </Menu></Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        NURSERY
      </MenuButton>
      
    </Menu>
      
      </Box>
      <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        MOMS
      </MenuButton>
      
    </Menu></Box>
    <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        HEALTH
      </MenuButton>
      
    </Menu></Box>
    <Box><Menu>

<MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        BOUTIQUES
      </MenuButton>
      
    </Menu></Box>
<Box  bg='rgb(254,221,0)' fontSize="15px">
<Image width='180%' src="https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png" /></Box>


     <Box><Menu>
      <MenuButton fontSize="15px" bg='rgb(254,221,0)' as={Button}>
        CARTER'S
      </MenuButton>
      
    </Menu></Box>
    </HStack>
        </div>
      {/* </Box> */}
        </div>
        )
      }

export default  LowerNavbar