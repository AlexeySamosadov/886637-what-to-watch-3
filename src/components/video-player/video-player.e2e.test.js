import React from "react";
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  src: `somePath`,
  srcVideo: `somePath`
};

it(`Should video player change state with different isPlaying props`, ()=>{

  const {src, srcVideo} = mock;

  const videoPlayerWrapper = (isActive) => {
    return mount(
        <VideoPlayer
          src={src}
          srcVideo={srcVideo}
          isActive={isActive}
          handleMouse={()=>{}}
          handleMouseEnter={()=>{}}
          handleMouseLeave={()=>{}}
        />
    );
  };
  expect(videoPlayerWrapper(true).state(`isActive`)).toBe(true);
  expect(videoPlayerWrapper(false).state(`isActive`)).toBe(false);
});
