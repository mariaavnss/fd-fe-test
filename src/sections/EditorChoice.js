import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { API_URL } from "../utils/constants";

import SectionHeader from "../components/SectionHeader";
import Cards from "../components/Cards";
import { editorChoiceList } from "../data/Data";

const CardWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto 40px;
`;

const Container = styled.div`
  padding: 0 150px;
`;

function EditorChoice() {
  // const [editorChoiceList_, setEditorChoiceList] = useState([]);

  // useEffect(() => {
  //   async function fetchEditorChoiceList() {
  //     try {
  //       const requestUrl = API_URL;
  //       const response = await fetch(requestUrl); //error cors 429
  //       const responseJSON = await response.json();
  //       //console.log(responseJSON["editor's choice"]);
  //       setEditorChoiceList(responseJSON["editor's choice"]);
  //     } catch (err) {
  //       console.log("###error###");
  //       console.log(err);
  //     }
  //   }
  //   fetchEditorChoiceList();
  // });

  return (
    <Container>
      <SectionHeader
        title={"Editor's Choice"}
        subtitle={"Curated with love"}
        seeMore={false}
      />
      <CardWrapper>
        {editorChoiceList.map((data, index) => (
          <Cards
            key={`editor choice-${index}`}
            match={false}
            byEditor={true}
            line={true}
            editor={data.editor}
            role={data.role}
            productImage={data.product.image}
            productName={data.product.name}
            sectionType="editor's choice"
            productRating={data.product.rating}
            productDescription={data.product.description}
          />
        ))}
      </CardWrapper>
    </Container>
  );
}

export default EditorChoice;
