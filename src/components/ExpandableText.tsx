import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text onClick={() => setExpanded(!expanded)}>
      {summary}{" "}
      <Button size="xs" fontWeight="bold" colorScheme="yellow" marginLeft={1}>
        {" "}
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
