import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";


it(`This is Unit Test for MoviePageDetails component`, ()=>{
  const tree = renderer
    .create(
        <Tabs
          activeTap={`Overview`}
          onTabClick={()=>{}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
