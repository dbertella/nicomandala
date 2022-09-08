import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const Cover = styled(StaticImage)`
  width: 550px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const CoverImg = () => {
  return (
    <Flex>
      <StaticImage
        src="../images/copertina-mandala-per-sito.jpg"
        alt="please include an alt"
      />
    </Flex>
  );
};

export default CoverImg;
