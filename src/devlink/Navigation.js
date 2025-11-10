"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navigation-dropdown-2","originalId":"6836e5b93ed71a4d96255440|5064501a-49f4-4262-01d1-a4478c80c009","appliesTo":"CLASS"},"targets":[{"selector":".navigation-dropdown-2","originalId":"6836e5b93ed71a4d96255440|5064501a-49f4-4262-01d1-a4478c80c009","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1729242271649},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navigation-dropdown-2","originalId":"6836e5b93ed71a4d96255440|5064501a-49f4-4262-01d1-a4478c80c009","appliesTo":"CLASS"},"targets":[{"selector":".navigation-dropdown-2","originalId":"6836e5b93ed71a4d96255440|5064501a-49f4-4262-01d1-a4478c80c009","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1729242271649},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ad935fd3-9503-b344-7cf5-1eba103e6b58","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ad935fd3-9503-b344-7cf5-1eba103e6b58","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751877852672}},"actionLists":{"a-12":{"id":"a-12","title":"Navigation Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-12-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navigation-dropdown-list-2","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8ea"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8f1"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-12-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navigation-dropdown-list-2","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8ea"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1729242274284},"a-13":{"id":"a-13","title":"Navigation Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-icon","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8f1"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navigation-dropdown-list-2","selectorGuids":["52578555-fcd0-965f-5aea-9ab199cde8ea"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1729242274284},"a-31":{"id":"a-31","title":"Mega Menu Open","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ad935fd3-9503-b344-7cf5-1eba103e6b58"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1751877888778}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navigation-component-2")}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navigation-3")}
        tag="div"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
          animation: "default",
          collapse: "medium",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navigation-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-left-5")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "navigation-logo-2")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                aria-label="selofy homepage"
                alt=""
                src="https://cdn.prod.website-files.com/6836789db492b399d2694f7f/68a2c58f0118fa83a009d358_selofy_logo.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-vertical-divider")}
              tag="div"
            />
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "navigation-menu-2")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.DropdownWrapper
                className={_utils.cx(
                  _styles,
                  "navigation-dropdown-5",
                  "navbrands"
                )}
                data-w-id="ad935fd3-9503-b344-7cf5-1eba103e6b58"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navigation-dropdown-toggle-2")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Brands"}</_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "dropdown-icon")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-small-2")}
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.9997%2012.7809L15.2996%209.48112L16.2424%2010.4239L11.9997%2014.6666L7.75708%2010.4239L8.69989%209.48112L11.9997%2012.7809Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "navigation-dropdown-list-6")}
                  tag="nav"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "navigation-dropdown-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navigation-dropdown-left")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ad935fd3-9503-b344-7cf5-1eba103e6b60-103e6b50"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "column")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "navigation-heading")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "caption-x-small",
                              "text-color-tertiary"
                            )}
                            tag="div"
                          >
                            {"Study competitors and boost performance"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "/all-brands?sort_year=desc",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M4.87759%203.00275H19.1319C19.4518%203.00275%2019.7524%203.15583%2019.9406%203.41457L23.7634%208.67097C23.9037%208.86385%2023.8882%209.12895%2023.7265%209.30419L12.3721%2021.6047C12.1848%2021.8076%2011.8685%2021.8203%2011.6656%2021.633C11.6591%2021.627%207.86486%2017.5174%200.282992%209.30419C0.121226%209.12895%200.10575%208.86385%200.246026%208.67097L4.06886%203.41457C4.25704%203.15583%204.55766%203.00275%204.87759%203.00275ZM5.38682%205.00275L2.58738%208.85198L12.0047%2019.0541L21.4221%208.85198L18.6226%205.00275H5.38682Z%22%2F%3E%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Rising Brands"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"Innovative new brands rising fast"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "/all-brands?sort_traffic=desc",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M2.00488%2019H22.0049V21H2.00488V19ZM2.00488%205L7.00488%208.5L12.0049%202L17.0049%208.5L22.0049%205V17H2.00488V5ZM4.00488%208.84131V15H20.0049V8.84131L16.5854%2011.2349L12.0049%205.28024L7.42435%2011.2349L4.00488%208.84131Z%22%2F%3E%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Traffic Leaders"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"High-traffic market dominators"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "/all-brands?Featured_equal=true",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2C23.5V18a2.85%2C2.85%2C0%2C0%2C0-.84-2L8.58%2C13.4a1.9%2C1.9%2C0%2C0%2C0-2.7%2C0h0a1.88%2C1.88%2C0%2C0%2C0-.56%2C1.35h0a2.66%2C2.66%2C0%2C0%2C0%2C.79%2C1.9l2.07%2C2.08%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.32%2C23.5v-.95l-3-3a2.87%2C2.87%2C0%2C0%2C1-.84-2v-7.4A1.9%2C1.9%2C0%2C0%2C1%2C3.41%2C8.23h0a1.91%2C1.91%2C0%2C0%2C1%2C1.91%2C1.91v5.72l2.86%2C2.87%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2C23.5V18a2.85%2C2.85%2C0%2C0%2C1%2C.84-2l2.58-2.58a1.9%2C1.9%2C0%2C0%2C1%2C2.7%2C0h0a1.88%2C1.88%2C0%2C0%2C1%2C.56%2C1.35h0a2.66%2C2.66%2C0%2C0%2C1-.79%2C1.9l-2.07%2C2.08%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18.68%2C23.5v-.95l3-3a2.87%2C2.87%2C0%2C0%2C0%2C.84-2v-7.4a1.9%2C1.9%2C0%2C0%2C0-1.91-1.91h0a1.91%2C1.91%2C0%2C0%2C0-1.91%2C1.91v5.72l-2.86%2C2.87%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2212%202.5%2013.09%204.7%2015.51%205.05%2013.76%206.76%2014.17%209.18%2012%208.04%209.83%209.18%2010.24%206.76%208.49%205.05%2010.91%204.7%2012%202.5%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Featured Brands"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"Community-selected best brands"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "navigation-text-link")}
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-26")}
                          tag="div"
                        >
                          {"Explore All"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-x-small-2")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M8.78126%208.00047L5.48145%204.70062L6.42425%203.75781L10.6669%208.00047L6.42425%2012.2431L5.48145%2011.3003L8.78126%208.00047Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.NotSupported _atom="DynamoWrapper" />
                  </_Builtin.Grid>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(
                  _styles,
                  "navigation-dropdown-5",
                  "navtoos"
                )}
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "navigation-dropdown-toggle-2")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Tools"}</_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "dropdown-icon")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-small-2")}
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.9997%2012.7809L15.2996%209.48112L16.2424%2010.4239L11.9997%2014.6666L7.75708%2010.4239L8.69989%209.48112L11.9997%2012.7809Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "navigation-dropdown-list-6")}
                  tag="nav"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "navigation-dropdown-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navigation-dropdown-left")}
                      id={_utils.cx(
                        _styles,
                        "w-node-ad935fd3-9503-b344-7cf5-1eba103e6b98-103e6b50"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "column")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "navigation-heading")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "caption-x-small",
                              "text-color-tertiary"
                            )}
                            tag="div"
                          >
                            {"Curated kit to boost sales"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19.4668%208.69379L19.7134%208.12811C20.1529%207.11947%2020.9445%206.31641%2021.9323%205.87708L22.6919%205.53922C23.1027%205.35653%2023.1027%204.75881%2022.6919%204.57612L21.9748%204.25714C20.9616%203.80651%2020.1558%202.97373%2019.7238%201.93083L19.4706%201.31953C19.2942%200.893489%2018.7058%200.893489%2018.5293%201.31953L18.2761%201.93083C17.8442%202.97373%2017.0384%203.80651%2016.0252%204.25714L15.308%204.57612C14.8973%204.75881%2014.8973%205.35653%2015.308%205.53922L16.0677%205.87708C17.0555%206.31641%2017.8471%207.11947%2018.2866%208.12811L18.5331%208.69379C18.7136%209.10792%2019.2864%209.10792%2019.4668%208.69379ZM13.3869%206.33879C13.661%206.77254%2014.0357%207.09305%2014.5111%207.30032L15.0764%207.54679C15.6466%207.79534%2016.054%208.19476%2016.2987%208.74505L16.6365%209.5047C17.364%2011.1416%2019.5284%2011.3993%2020.709%2010.2787L20.8%2010.4C21.0867%2010.7822%2021.0629%2011.3138%2020.7433%2011.669L11.7433%2021.669C11.5537%2021.8797%2011.2835%2022%2011%2022C10.7165%2022%2010.4464%2021.8797%2010.2567%2021.669L1.25671%2011.669C0.937093%2011.3138%200.913337%2010.7822%201.2%2010.4L4.2%206.4C4.38886%206.14819%204.68525%206%205%206H13.2063C13.2571%206.1157%2013.3173%206.22863%2013.3869%206.33879Z%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Special Deal Apps"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"Exclusive discount"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M2.00488%203.99979C2.00488%203.4475%202.4526%202.99979%203.00488%202.99979H21.0049C21.5572%202.99979%2022.0049%203.4475%2022.0049%203.99979V9.49979C20.6242%209.49979%2019.5049%2010.6191%2019.5049%2011.9998C19.5049%2013.3805%2020.6242%2014.4998%2022.0049%2014.4998V19.9998C22.0049%2020.5521%2021.5572%2020.9998%2021.0049%2020.9998H3.00488C2.4526%2020.9998%202.00488%2020.5521%202.00488%2019.9998V3.99979ZM8.09024%2018.9998C8.29615%2018.4172%208.85177%2017.9998%209.50488%2017.9998C10.158%2017.9998%2010.7136%2018.4172%2010.9195%2018.9998H20.0049V16.032C18.5232%2015.2957%2017.5049%2013.7666%2017.5049%2011.9998C17.5049%2010.2329%2018.5232%208.7039%2020.0049%207.96755V4.99979H10.9195C10.7136%205.58238%2010.158%205.99979%209.50488%205.99979C8.85177%205.99979%208.29615%205.58238%208.09024%204.99979H4.00488V18.9998H8.09024ZM9.50488%2010.9998C8.67646%2010.9998%208.00488%2010.3282%208.00488%209.49979C8.00488%208.67136%208.67646%207.99979%209.50488%207.99979C10.3333%207.99979%2011.0049%208.67136%2011.0049%209.49979C11.0049%2010.3282%2010.3333%2010.9998%209.50488%2010.9998ZM9.50488%2015.9998C8.67646%2015.9998%208.00488%2015.3282%208.00488%2014.4998C8.00488%2013.6714%208.67646%2012.9998%209.50488%2012.9998C10.3333%2012.9998%2011.0049%2013.6714%2011.0049%2014.4998C11.0049%2015.3282%2010.3333%2015.9998%209.50488%2015.9998Z%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Freemuim Solutions"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"Free and premium tools"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "navigation-dropdown-link"
                          )}
                          button={false}
                          block="inline"
                          options={{
                            href: "#",
                          }}
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "icon-wrapper")}
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className={_utils.cx(_styles, "icon-x-small-2")}
                              value="%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2C23.5V18a2.85%2C2.85%2C0%2C0%2C0-.84-2L8.58%2C13.4a1.9%2C1.9%2C0%2C0%2C0-2.7%2C0h0a1.88%2C1.88%2C0%2C0%2C0-.56%2C1.35h0a2.66%2C2.66%2C0%2C0%2C0%2C.79%2C1.9l2.07%2C2.08%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.32%2C23.5v-.95l-3-3a2.87%2C2.87%2C0%2C0%2C1-.84-2v-7.4A1.9%2C1.9%2C0%2C0%2C1%2C3.41%2C8.23h0a1.91%2C1.91%2C0%2C0%2C1%2C1.91%2C1.91v5.72l2.86%2C2.87%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M12%2C23.5V18a2.85%2C2.85%2C0%2C0%2C1%2C.84-2l2.58-2.58a1.9%2C1.9%2C0%2C0%2C1%2C2.7%2C0h0a1.88%2C1.88%2C0%2C0%2C1%2C.56%2C1.35h0a2.66%2C2.66%2C0%2C0%2C1-.79%2C1.9l-2.07%2C2.08%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M18.68%2C23.5v-.95l3-3a2.87%2C2.87%2C0%2C0%2C0%2C.84-2v-7.4a1.9%2C1.9%2C0%2C0%2C0-1.91-1.91h0a1.91%2C1.91%2C0%2C0%2C0-1.91%2C1.91v5.72l-2.86%2C2.87%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2212%202.5%2013.09%204.7%2015.51%205.05%2013.76%206.76%2014.17%209.18%2012%208.04%209.83%209.18%2010.24%206.76%208.49%205.05%2010.91%204.7%2012%202.5%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.91%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "column")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "subheading-small-8"
                              )}
                              tag="div"
                            >
                              {"Featured Tools"}
                            </_Builtin.Block>
                            <_Builtin.Paragraph
                              className={_utils.cx(
                                _styles,
                                "paragraph-x-small-4"
                              )}
                            >
                              {"Expert-recommended top tools"}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "navigation-text-link")}
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-25")}
                          tag="div"
                        >
                          {"Explore All"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-x-small-2")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M8.78126%208.00047L5.48145%204.70062L6.42425%203.75781L10.6669%208.00047L6.42425%2012.2431L5.48145%2011.3003L8.78126%208.00047Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.NotSupported _atom="DynamoWrapper" />
                  </_Builtin.Grid>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navigation-link-2")}
                options={{
                  href: "#",
                }}
              >
                {"Tutorials"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navigation-link-2")}
                options={{
                  href: "#",
                }}
              >
                {"About"}
              </_Builtin.NavbarLink>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-right")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "navigation-link-2", "hide-tablet")}
              options={{
                href: "#",
              }}
            >
              {"Submit"}
            </_Builtin.NavbarLink>
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-vertical-divider")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-buttons")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button-primary-8")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Submit"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button-6")}
              tag="div"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
