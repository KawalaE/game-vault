import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  //differentiate between route error or application error
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding="20px">
        <Heading>Oops...</Heading>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
