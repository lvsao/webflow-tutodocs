"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ExploreButton.module.css";

export function ExploreButton({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "button-primary-large-3")}
      button={false}
      dyn={{
        bind: {},
      }}
      block=""
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "label-style")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "text-25")} tag="div">
          {"Explore More"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "arrow-right-up-line")}
        loading="lazy"
        width="20"
        height="20"
        src="https://cdn.prod.website-files.com/6836789db492b399d2694f7f/685028199195aea6cfcad5fa_arrow-right-up-line.svg"
      />
    </_Component>
  );
}
