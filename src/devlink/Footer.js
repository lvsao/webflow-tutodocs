"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link-2","originalId":"8358f544-a09b-a69f-53ef-d2154027cefc","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-2","originalId":"8358f544-a09b-a69f-53ef-d2154027cefc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732500865705},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".footer-link-2","originalId":"8358f544-a09b-a69f-53ef-d2154027cefc","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-2","originalId":"8358f544-a09b-a69f-53ef-d2154027cefc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732500865705}},"actionLists":{"a-16":{"id":"a-16","title":"Footer Link Hover On","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"xValue":-5,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"value":1,"unit":""}},{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1732500873212},"a-17":{"id":"a-17","title":"Footer Link Hover Off","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"value":0,"unit":""}},{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-small-4","selectorGuids":["99af3e22-86d3-3259-30c0-a5c6a6e9065d"]},"xValue":-5,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1732500873212}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-3")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large-10")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-row-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-left")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-company")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-logo-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6836789db492b399d2694f7f/68a2c58f0118fa83a009d358_selofy_logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "row-regular")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.youtube.com/@Shawn_lvsao",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M12.2439%204C12.778%204.00294%2014.1143%204.01586%2015.5341%204.07273L16.0375%204.09468C17.467%204.16236%2018.8953%204.27798%2019.6037%204.4755C20.5486%204.74095%2021.2913%205.5155%2021.5423%206.49732C21.942%208.05641%2021.992%2011.0994%2021.9982%2011.8358L21.9991%2011.9884L21.9991%2011.9991C21.9991%2011.9991%2021.9991%2012.0028%2021.9991%2012.0099L21.9982%2012.1625C21.992%2012.8989%2021.942%2015.9419%2021.5423%2017.501C21.2878%2018.4864%2020.5451%2019.261%2019.6037%2019.5228C18.8953%2019.7203%2017.467%2019.8359%2016.0375%2019.9036L15.5341%2019.9255C14.1143%2019.9824%2012.778%2019.9953%2012.2439%2019.9983L12.0095%2019.9991L11.9991%2019.9991C11.9991%2019.9991%2011.9956%2019.9991%2011.9887%2019.9991L11.7545%2019.9983C10.6241%2019.9921%205.89772%2019.941%204.39451%2019.5228C3.4496%2019.2573%202.70692%2018.4828%202.45587%2017.501C2.0562%2015.9419%202.00624%2012.8989%202%2012.1625V11.8358C2.00624%2011.0994%202.0562%208.05641%202.45587%206.49732C2.7104%205.51186%203.45308%204.73732%204.39451%204.4755C5.89772%204.05723%2010.6241%204.00622%2011.7545%204H12.2439ZM9.99911%208.49914V15.4991L15.9991%2011.9991L9.99911%208.49914Z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://x.com/shawn_lvsao",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M7.27273%203.33325H2.5L8.1324%2010.6763L2.80678%2016.6665H4.61362L8.9693%2011.7673L12.7273%2016.6666H17.5L11.6307%209.01478L16.6819%203.33325H14.8751L10.7938%207.92377L7.27273%203.33325ZM13.4091%2015.3333L5.22727%204.66659H6.59091L14.7727%2015.3333H13.4091Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-social-link")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://www.linkedin.com/in/lvsao/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M5.78381%204.16669C5.78351%204.84528%205.37181%205.45593%204.74286%205.71069C4.11391%205.96546%203.39331%205.81346%202.92083%205.32637C2.44836%204.83928%202.31837%204.11437%202.59216%203.49347C2.86596%202.87257%203.48886%202.47966%204.16715%202.50002C5.06804%202.52706%205.78422%203.26539%205.78381%204.16669ZM5.83381%207.06669H2.50048V17.5H5.83381V7.06669ZM11.1005%207.06669H7.78381V17.5H11.0672V12.025C11.0672%208.975%2015.0422%208.69166%2015.0422%2012.025V17.5H18.3338V10.8917C18.3338%205.75002%2012.4505%205.94169%2011.0672%208.46666L11.1005%207.06669Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-regular-4")}
              >
                {"Build solo, sell bold"}
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-main", "footerbutton")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.shopify.com/partners/directory/partner/selofy",
                  target: "_blank",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "code-embed-31")}
                  value="%3Cimg%20height%3D%2232%22%20width%3D%2232%22%20src%3D%22https%3A%2F%2Fcdn.simpleicons.org%2Fshopify%2Fwhite%22%20%2F%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-42")}
                  tag="div"
                >
                  {"Shopify Partner"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "footer-links-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "column-x-large")}
              id={_utils.cx(
                _styles,
                "w-node-_8358f544-a09b-a69f-53ef-d2154027cef8-4027cee2"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "subheading-large-5")}
                tag="div"
              >
                {"Explore"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "column-large-4")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Brands"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Tools"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Tutorials"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2", "none")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Partners"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "column-x-large")}
              id={_utils.cx(
                _styles,
                "w-node-_8358f544-a09b-a69f-53ef-d2154027cf1c-4027cee2"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "subheading-large-5")}
                tag="div"
              >
                {"Our Apps"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "column-large-4")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-46")}
                    tag="div"
                  >
                    {"Alt Text Optimizer"}
                  </_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "column-x-large")}
              id={_utils.cx(
                _styles,
                "w-node-_8358f544-a09b-a69f-53ef-d2154027cf0c-4027cee2"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "subheading-large-5")}
                tag="div"
              >
                {"Community"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "column-large-4")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "https://discord.gg/yGKMNjke",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "code-embed-21")}
                    value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22current%20color%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M19.3034%205.33716C17.9344%204.71103%2016.4805%204.2547%2014.9629%204C14.7719%204.32899%2014.5596%204.77471%2014.411%205.12492C12.7969%204.89144%2011.1944%204.89144%209.60255%205.12492C9.45397%204.77471%209.2311%204.32899%209.05068%204C7.52251%204.2547%206.06861%204.71103%204.70915%205.33716C1.96053%209.39111%201.21766%2013.3495%201.5891%2017.2549C3.41443%2018.5815%205.17612%2019.388%206.90701%2019.9187C7.33151%2019.3456%207.71356%2018.73%208.04255%2018.0827C7.41641%2017.8492%206.82211%2017.5627%206.24904%2017.2231C6.39762%2017.117%206.5462%2017.0003%206.68416%2016.8835C10.1438%2018.4648%2013.8911%2018.4648%2017.3082%2016.8835C17.4568%2017.0003%2017.5948%2017.117%2017.7434%2017.2231C17.1703%2017.5627%2016.576%2017.8492%2015.9499%2018.0827C16.2789%2018.73%2016.6609%2019.3456%2017.0854%2019.9187C18.8152%2019.388%2020.5875%2018.5815%2022.4033%2017.2549C22.8596%2012.7341%2021.6806%208.80747%2019.3034%205.33716ZM8.5201%2014.8459C7.48007%2014.8459%206.63107%2013.9014%206.63107%2012.7447C6.63107%2011.5879%207.45884%2010.6434%208.5201%2010.6434C9.57071%2010.6434%2010.4303%2011.5879%2010.4091%2012.7447C10.4091%2013.9014%209.57071%2014.8459%208.5201%2014.8459ZM15.4936%2014.8459C14.4535%2014.8459%2013.6034%2013.9014%2013.6034%2012.7447C13.6034%2011.5879%2014.4323%2010.6434%2015.4936%2010.6434C16.5442%2010.6434%2017.4038%2011.5879%2017.3825%2012.7447C17.3825%2013.9014%2016.5548%2014.8459%2015.4936%2014.8459Z%22%2F%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block tag="div">{"Discord"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Submit"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link-2", "none")}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-small-4")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M10.9761%2010.0006L6.85132%205.87577L8.02983%204.69727L13.3332%2010.0006L8.02983%2015.3038L6.85132%2014.1253L10.9761%2010.0006Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-legal")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-legal-links-2")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-legal-link-2")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Terms of Service"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-vertical-divider")}
              tag="div"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-legal-link-2")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Cookie Policy"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-vertical-divider")}
              tag="div"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-legal-link-2")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Privacy Policy"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-vertical-divider")}
              tag="div"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-legal-link-2")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Affiliate Disclosure"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "paragraph-small-10",
              "text-color-tertiary"
            )}
            tag="div"
          >
            {"©2025 Selofy - All Rights Reserved."}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
