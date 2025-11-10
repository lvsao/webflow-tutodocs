"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-147"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a53d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a53d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750418378316},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a53d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a53d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750418378316},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"683fdd4fe10c783bc15fba42|c4064ff9-ba4e-a6ab-267c-19608a7a1bbe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"683fdd4fe10c783bc15fba42|c4064ff9-ba4e-a6ab-267c-19608a7a1bbe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750853197275},"e-60":{"id":"e-60","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"683fdd4fe10c783bc15fba42|c4064ff9-ba4e-a6ab-267c-19608a7a1bbe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"683fdd4fe10c783bc15fba42|c4064ff9-ba4e-a6ab-267c-19608a7a1bbe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750853197275},"e-91":{"id":"e-91","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-toggle","originalId":"7c44c8a3-68a2-082d-75e8-83b5877d9b94","appliesTo":"CLASS"},"targets":[{"selector":".faq-toggle","originalId":"7c44c8a3-68a2-082d-75e8-83b5877d9b94","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725511473222},"e-92":{"id":"e-92","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-146"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-toggle","originalId":"7c44c8a3-68a2-082d-75e8-83b5877d9b94","appliesTo":"CLASS"},"targets":[{"selector":".faq-toggle","originalId":"7c44c8a3-68a2-082d-75e8-83b5877d9b94","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725511473223},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle-small","originalId":"683fdd1c45eacd3511315219|d4d2b5fb-85f5-7c75-ebd6-f2d272eb670e","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle-small","originalId":"683fdd1c45eacd3511315219|d4d2b5fb-85f5-7c75-ebd6-f2d272eb670e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725511338213},"e-114":{"id":"e-114","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle-small","originalId":"683fdd1c45eacd3511315219|d4d2b5fb-85f5-7c75-ebd6-f2d272eb670e","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle-small","originalId":"683fdd1c45eacd3511315219|d4d2b5fb-85f5-7c75-ebd6-f2d272eb670e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725511338214},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68997c837c87b25e45123e4b|4dfe5ce5-e3dc-58a4-5e20-aac6c708e0dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68997c837c87b25e45123e4b|4dfe5ce5-e3dc-58a4-5e20-aac6c708e0dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-120":{"id":"e-120","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68997c837c87b25e45123e4b|4dfe5ce5-e3dc-58a4-5e20-aac6c708e0dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68997c837c87b25e45123e4b|4dfe5ce5-e3dc-58a4-5e20-aac6c708e0dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle","originalId":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a495","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle","originalId":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a495","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755070927441},"e-122":{"id":"e-122","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle","originalId":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a495","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle","originalId":"683fdd1c45eacd3511315219|fb96625f-b101-0ab7-6d71-0a9f8d80a495","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1755070927441},"e-133":{"id":"e-133","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle-3","originalId":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7b3b","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle-3","originalId":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7b3b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-134":{"id":"e-134","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".filter-dropdown-toggle-3","originalId":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7b3b","appliesTo":"CLASS"},"targets":[{"selector":".filter-dropdown-toggle-3","originalId":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7b3b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-135":{"id":"e-135","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-136":{"id":"e-136","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7be3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"684aa9cb113b9b3d47b577fe|9cabfda1-438f-83b4-1921-68725e4f7be3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1725366120953},"e-139":{"id":"e-139","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6867853e9e80ccc49037fc5e|c5e04faa-061b-1559-97d6-cabb2db719e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6867853e9e80ccc49037fc5e|c5e04faa-061b-1559-97d6-cabb2db719e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757238311540},"e-140":{"id":"e-140","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6867853e9e80ccc49037fc5e|c5e04faa-061b-1559-97d6-cabb2db719e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6867853e9e80ccc49037fc5e|c5e04faa-061b-1559-97d6-cabb2db719e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757238311540},"e-285":{"id":"e-285","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-toggle","originalId":"68de37c02623b2ea8ab815bf|e30a57c6-4290-c9ad-299f-e0fd397a5025","appliesTo":"CLASS"},"targets":[{"selector":".faq-toggle","originalId":"68de37c02623b2ea8ab815bf|e30a57c6-4290-c9ad-299f-e0fd397a5025","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759584220632},"e-286":{"id":"e-286","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-toggle","originalId":"68de37c02623b2ea8ab815bf|e30a57c6-4290-c9ad-299f-e0fd397a5025","appliesTo":"CLASS"},"targets":[{"selector":".faq-toggle","originalId":"68de37c02623b2ea8ab815bf|e30a57c6-4290-c9ad-299f-e0fd397a5025","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759584220632}},"actionLists":{"a-26":{"id":"a-26","title":"Filter 02 Dropdown Open","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-26-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"value":0,"unit":""}},{"id":"a-26-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-26-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-26-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-26-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714537653249},"a-27":{"id":"a-27","title":"Filter 02 Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-27-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-27-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c01b"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714537602458},"a-36":{"id":"a-36","title":"FAQ Dropdown Open","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-36-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-36-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-36-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714537653249},"a-37":{"id":"a-37","title":"FAQ Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-37-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714537602458},"a-46":{"id":"a-46","title":"Filter Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-46-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"value":0,"unit":""}},{"id":"a-46-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-46-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-46-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-46-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714537653249},"a-47":{"id":"a-47","title":"Filter Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-47-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-47-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-small-2","selectorGuids":["10e0a0d8-2340-0c77-3944-50d9638226fd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714537653249},"a-59":{"id":"a-59","title":"Filter 02 Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-59-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"value":0,"unit":""}},{"id":"a-59-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-59-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-59-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-59-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714537653249},"a-60":{"id":"a-60","title":"Filter 02 Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-60-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-60-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".filter-dropdown-content-2","selectorGuids":["2314c5d3-fa01-d208-17cb-ce3d2f70839d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714537602458},"a-116":{"id":"a-116","title":"FAQ Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-116-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-116-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-116-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-116-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1714537653249},"a-117":{"id":"a-117","title":"FAQ Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-117-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".faq-dropdown-contet","selectorGuids":["488cc393-66f6-2e7d-f378-c091dac90544"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".icon-regular-5","selectorGuids":["358aec8d-4f0f-0250-ec44-5ddf0935c02a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714537602458}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Faq({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-regular-6", "background-gray-50")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "title-center-regular")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2-heading-9")}
            tag="h2"
          >
            {"Frequently asked questions"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.TabsWrapper
          className={_utils.cx(_styles, "faq-tabs")}
          id={_utils.cx(
            _styles,
            "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b03-877d9afc"
          )}
          current="Tab 1"
          easing="ease"
          fadeIn={300}
          fadeOut={100}
        >
          <_Builtin.TabsMenu
            className={_utils.cx(_styles, "faq-tabs-menu")}
            tag="div"
          >
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "faq-tab-link")}
              data-w-tab="Tab 1"
              block="inline"
            >
              <_Builtin.Block tag="div">{"General"}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "faq-tab-link")}
              data-w-tab="Tab 2"
              block="inline"
            >
              <_Builtin.Block tag="div">{"Commnuity"}</_Builtin.Block>
            </_Builtin.TabsLink>
            <_Builtin.TabsLink
              className={_utils.cx(_styles, "faq-tab-link")}
              data-w-tab="Tab 3"
              block="inline"
            >
              <_Builtin.Block tag="div">{"Business"}</_Builtin.Block>
            </_Builtin.TabsLink>
          </_Builtin.TabsMenu>
          <_Builtin.TabsContent tag="div">
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-list-wrapper-small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b10-877d9afc"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-list")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b11-877d9afc"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Where does your data come from? Is it accurate and reliable?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Our data comes from multiple sources:First, we crawl official information directly from websites.Second, we gather data from professional third-party platforms like Similarweb, Ahrefs, and other analytics tools.We recommend you approach all data with critical thinking."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"How often is the data updated?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Monthly updates. We pull the latest data at the beginning of each month."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "What criteria do you use to recommend brands and tools?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {"Two main sources:"}
                          <br />
                          {"First, community member recommendations."}
                          <br />
                          {"Second, based on my own experience."}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Are there any ads or conflicts of interest?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Some tools may generate affiliate income, but we will clearly disclose this."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"I found some errors."}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Since this website is primarily operated and verified by one person, mistakes are inevitable. We appreciate your understanding and welcome you to report any issues promptly."
                          }
                          <br />
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Can I recommend or submit a tool/brand/agency/creator? Is there a fee?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Absolutely! We very much welcome submissions. No fee required!RetryClaude can make mistakes. Please double-check responses."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-13")}
                  button={true}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Contact Us"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-list-wrapper-small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b50-877d9afc"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-list")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b51-877d9afc"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"What is the community? What is Selofy?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Currently, we primarily use Discord (English) and WeChat (Chinese) as our community platforms. We aim to build a space where e-commerce professionals can communicate effectively, whether you're a practitioner like marketers or solopreneurs."
                          }
                          <br />
                          {
                            "Over the past two years, we've gathered 5K+ community members. Through daily interactions, I've discovered that many members face common challenges: finding the right brands to study, discovering suitable tools, and accessing effective tutorials. Based on this, Selofy was born - it's a tool platform that emerged from our community, born from the community and serving the community."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Can I join the community? Is there a fee?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "You're welcome to join! Discord is currently free for a limited time."
                          }
                          <br />
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Can I promote my products or services in the community?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "No, please strictly follow community rules or you'll be removed immediately. For any business needs, please contact us directly."
                          }
                          <br />
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"What are the benefits of joining the community?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {"For now, networking and knowledge exchange."}
                          <br />
                          {
                            "More benefits are on the way, we are still cooking."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Can I become a Selofy contributor or community moderator? What are the benefits?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Unfortunately, we don't currently have the capacity to offer compensation, so we don't have hiring needs at this stage."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"How do I join the community?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            'Click the link to join Discord, or search "metalvsao" on WeChat.'
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-13")}
                  button={true}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Join our Discord"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.TabsPane>
            <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-list-wrapper-small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b91-877d9afc"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-list")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_7c44c8a3-68a2-082d-75e8-83b5877d9b92-877d9afc"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"I'm a tool provider. Do you support free listings?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Yes. Currently, you can qualify for free listing through:"
                          }
                          <br />
                          {
                            "Content contribution: Recommend brands or write guest blogs."
                          }
                          <br />
                          {
                            "Member benefits: Provide exclusive discounts or experiences for our community members."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"What do we get after free listing?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {"Permanent product listing and profile page."}
                          <br />
                          {"Permanent partner listing and profile page."}
                          <br />
                          {
                            "Community marketing campaigns for the benefits you provide."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Regular users can also submit for free. What's the difference?"
                        }
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "Regular user submissions won't get a dedicated partner listing and profile page, neither the marketing campaign."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"I'm an agency. Can I get listed for free?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "For now, we are still working for the agency part. Just keep in touch."
                          }
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Are there any entry requirements?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {
                            "1. Have an official website, LinkedIn, and other social media accounts to demonstrate stable business capabilities."
                          }
                          <br />
                          {"2. Have real client case studies."}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "faq-item")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "faq-toggle")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Are there more possibilities for paid partnerships?"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-regular-5")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M11.9997%2010.8284L7.04996%2015.7782L5.63574%2014.364L11.9997%208L18.3637%2014.364L16.9495%2015.7782L11.9997%2010.8284Z%22%20fill%3D%22%23201F1F%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-dropdown-contet")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-dropdown-padding")}
                        tag="div"
                      >
                        <_Builtin.Paragraph
                          className={_utils.cx(
                            _styles,
                            "paragraph-small-17",
                            "text-color-gray-800"
                          )}
                        >
                          {"Please contact us directly."}
                        </_Builtin.Paragraph>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-13")}
                  button={true}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Contact Us"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.TabsPane>
          </_Builtin.TabsContent>
        </_Builtin.TabsWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
