import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";
useNavigate;
const NavBar = () => {
  return (
    <HStack padding="10px" display="flex" justify="space-between">
      <Link to="/">
        <Image
          objectFit="cover"
          cursor="pointer"
          src={logo}
          boxSize="60px"
        ></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
