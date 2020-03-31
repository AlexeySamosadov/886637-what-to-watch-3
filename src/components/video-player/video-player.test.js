import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player.jsx";

const mock = {
  isActive: true,
  src: `somePath`,
  srcVideo: `somePath`
};

it(`VideoPlayer is renderer correctly`, ()=>{
  const {src, srcVideo, isActive} = mock;

  const tree = renderer.create(<VideoPlayer
    src={src}
    srcVideo={srcVideo}
    isActive={isActive}
    handleMouse={()=>{}}
    handleMouseEnter={()=>{}}
    handleMouseLeave={()=>{}}
  />, {
    createNodeMock: () => {
      return {play() {}};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
