import { c as create_ssr_component, b as add_attribute, i as is_void, v as validate_component, m as missing_component, e as escape, f as each } from "../../../../chunks/index2.js";
import { spanToPlainText, isPortableTextToolkitList, isPortableTextListItemBlock, buildMarksTree, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML } from "@portabletext/toolkit";
import { u as urlFor } from "../../../../chunks/image.js";
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
const DefaultMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let markType;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ markType } = portableText);
  return `${markType === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${markType === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${markType === "code" ? `<code>${slots.default ? slots.default({}) : ``}</code>` : `${markType === "underline" ? `<span style="text-decoration:underline;">${slots.default ? slots.default({}) : ``}</span>` : `${markType === "strike-through" ? `<del>${slots.default ? slots.default({}) : ``}</del>` : `${slots.default ? slots.default({}) : ``}`}`}`}`}`}`;
});
const DefaultLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let href;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  href = (value === null || value === void 0 ? void 0 : value.href) || (value === null || value === void 0 ? void 0 : value.url) || (value === null || value === void 0 ? void 0 : value.link) || (value === null || value === void 0 ? void 0 : value.value);
  return `${typeof href === "string" ? `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const DefaultBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let style;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  style = value.style || "normal";
  return `${["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(style) ? `${((tag) => {
    return tag ? `<${style}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(style)}` : `${style === "normal" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${slots.default ? slots.default({}) : ``}`}`}`;
});
const DefaultList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let listItem;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  ({ value } = portableText);
  ({ listItem } = value);
  return `${listItem === "number" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const DefaultListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const DefaultHardBreak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>`;
});
const UnknownType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const defaultComponents = {
  marks: {
    "strike-through": DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultLink
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  list: {
    bullet: DefaultList,
    number: DefaultList
  },
  listItem: {
    bullet: DefaultListItem,
    number: DefaultListItem
  },
  types: {},
  hardBreak: DefaultHardBreak,
  unknownBlockStyle: DefaultBlock,
  unknownList: DefaultList,
  unknownListItem: DefaultListItem,
  unknownMark: DefaultMark,
  unknownType: UnknownType
};
function mergeComponents(parent, overrides = {}) {
  return {
    ...parent,
    ...overrides,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return { ...parentVal, ...override };
  }
  return parentVal;
}
const RenderBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let blockComponent;
  let blockProps;
  let { global } = $$props;
  let { node } = $$props;
  let { indexInParent } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  ({ components } = global);
  ({ style = "normal" } = node);
  blockComponent = typeof components.block === "function" ? components.block : components.block[style];
  {
    if (!blockComponent) {
      global.missingComponentHandler(style, "blockStyle");
    }
  }
  blockProps = (() => {
    return { global, indexInParent, value: node };
  })();
  return `${validate_component(blockComponent || components.unknownBlockStyle || missing_component, "svelte:component").$$render($$result, { portableText: blockProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderCustomBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let _type;
  let customComponent;
  let componentProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  let { indexInParent } = $$props;
  let { isInline = false } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0)
    $$bindings.parentBlock(parentBlock);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  ({ components } = global);
  ({ _type } = node);
  customComponent = components.types[_type];
  {
    if (!customComponent) {
      global.missingComponentHandler(_type, "block");
    }
  }
  componentProps = (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    };
  })();
  return `${validate_component(customComponent || components.unknownType || missing_component, "svelte:component").$$render($$result, { portableText: componentProps }, {}, {})}`;
});
const RenderList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let listItem;
  let handler;
  let listComponent;
  let listProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ listItem } = node);
  handler = typeof components.list === "function" ? components.list : components.list[listItem];
  listComponent = handler;
  {
    if (!listComponent) {
      global.missingComponentHandler(listItem, "listStyle");
    }
  }
  listProps = (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listComponent || components.unknownList || missing_component, "svelte:component").$$render($$result, { portableText: listProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let listItemComponent;
  let styleComponent;
  let listItemProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0)
    $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ style = "normal" } = node);
  listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
  {
    if (!listItemComponent) {
      global.missingComponentHandler(style, "listItemStyle");
    }
  }
  styleComponent = style !== "normal" ? components.block[style] : void 0;
  listItemProps = (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listItemComponent || components.unknownListItem || missing_component, "svelte:component").$$render($$result, { portableText: listItemProps }, {}, {
    default: () => {
      return `${styleComponent ? `${validate_component(styleComponent || missing_component, "svelte:component").$$render(
        $$result,
        {
          portableText: {
            // Different props for the block that will hold this list
            ...listItemProps,
            value: {
              ...node,
              // BlockComponentProps shouldn't receive a listItem
              listItem: void 0
            }
          }
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}`;
});
const RenderSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let markType;
  let markComponent;
  let markProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0)
    $$bindings.parentBlock(parentBlock);
  ({ components } = global);
  ({ markType } = node);
  markComponent = components.marks[markType];
  {
    if (!markComponent) {
      global.missingComponentHandler(markType, "mark");
    }
  }
  markProps = (() => {
    return {
      global,
      parentBlock,
      markType,
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    };
  })();
  return `${validate_component(markComponent || components.unknownMark || missing_component, "svelte:component").$$render($$result, { portableText: markProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let text;
  let { global } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  ({ components } = global);
  ({ text } = node);
  return `${text === "\n" ? `${typeof components.hardBreak === "function" ? `${validate_component(components.hardBreak || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${escape(text)}`}` : `${escape(text)}`}`;
});
const RenderNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let node;
  let indexInParent;
  let parentBlock;
  let isInline;
  let { global } = $$props;
  let { options } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0)
    $$bindings.global(global);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  ({ node, indexInParent, parentBlock, isInline } = options);
  return `${isPortableTextToolkitList(node) ? `${validate_component(RenderList, "RenderList").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              node: child,
              indexInParent: childIndex,
              // The list's children will be parsed as PortableTextListItem, which will pass the proper parentBlock & isInline
              parentBlock: void 0,
              isInline: void 0
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextListItemBlock(node) ? `${validate_component(RenderListItem, "RenderListItem").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              // Pass the current listItem as a parentBlock
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitSpan(node) ? `${validate_component(RenderSpan, "RenderSpan").$$render($$result, { node, parentBlock, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextBlock(node) ? `${validate_component(RenderBlock, "RenderBlock").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitTextNode(node) ? `${validate_component(RenderText, "RenderText").$$render($$result, { node, global }, {}, {})}` : `${node ? `${validate_component(RenderCustomBlock, "RenderCustomBlock").$$render(
    $$result,
    {
      node,
      parentBlock,
      indexInParent,
      isInline,
      global
    },
    {},
    {}
  )}` : ``}`}`}`}`}`}`;
});
const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? "." : ""}${prop}\` prop`;
const getWarningMessage = (type, nodeType) => {
  switch (nodeType) {
    case "block":
      return getTemplate(`block type "${type}"`, "types");
    case "blockStyle":
      return getTemplate(`block style "${type}"`, "block");
    case "listItemStyle":
      return getTemplate(`list item style "${type}"`, "listItem");
    case "listStyle":
      return getTemplate(`list style "${type}"`, "list");
    case "mark":
      return getTemplate(`mark type "${type}"`, "marks");
    default:
      return getTemplate("type");
  }
};
function printWarning(message) {
  console.warn(message);
}
const PortableText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mergedComponents;
  let keyedBlocks;
  let blocks;
  let missingComponentHandler;
  let { value = [] } = $$props;
  let { components } = $$props;
  let { context = {} } = $$props;
  let { onMissingComponent = true } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.onMissingComponent === void 0 && $$bindings.onMissingComponent && onMissingComponent !== void 0)
    $$bindings.onMissingComponent(onMissingComponent);
  mergedComponents = mergeComponents(defaultComponents, components);
  keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
  blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
  missingComponentHandler = (type, nodeType) => {
    if (onMissingComponent === false) {
      return;
    }
    const message = getWarningMessage(type, nodeType);
    if (typeof onMissingComponent === "function") {
      onMissingComponent(message, { type, nodeType });
      return;
    }
    printWarning(message);
  };
  return `${each(blocks, (node, index) => {
    return `${validate_component(RenderNode, "RenderNode").$$render(
      $$result,
      {
        global: {
          components: mergedComponents,
          missingComponentHandler,
          context,
          ptBlocks: blocks,
          ptRawValue: value
        },
        options: {
          node,
          isInline: false,
          indexInParent: index
        }
      },
      {},
      {}
    )}`;
  })}`;
});
const Step_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-1oe65ci.svelte-1oe65ci{position:relative}h3.svelte-1oe65ci.svelte-1oe65ci{position:absolute;width:200px;top:calc(50% - 4em / 2);left:0;text-align:center}img.svelte-1oe65ci.svelte-1oe65ci{opacity:0.3}section.svelte-1oe65ci.svelte-1oe65ci{--p:none}section.svelte-1oe65ci.svelte-1oe65ci:hover{--header:none;--p:flex}section.svelte-1oe65ci>h3.svelte-1oe65ci{display:var(--header)}section.svelte-1oe65ci>p.svelte-1oe65ci{display:var(--p);position:absolute;text-align:center;top:0;margin-block:auto;left:0;display:var(block);color:white}",
  map: null
};
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$result.css.add(css$1);
  return `<section class="svelte-1oe65ci"><img${add_attribute("src", urlFor(step.image).width(200).height(200).fit("crop").url(), 0)}${add_attribute("alt", step.name, 0)} class="svelte-1oe65ci">
    <h3 class="svelte-1oe65ci">${escape(step.name)}</h3>
    <p class="svelte-1oe65ci">${escape(step.description)}</p></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1vmg9nx{color:white}h1.svelte-1vmg9nx{text-align:center}h2.svelte-1vmg9nx{text-align:center}img.svelte-1vmg9nx{margin-inline:auto;display:block;margin-block:1rem;box-shadow:10px 10px rgba(255, 255, 255, 0.4)}section.svelte-1vmg9nx{padding:1rem}.steps-container.svelte-1vmg9nx{display:flex;justify-content:space-around;flex-wrap:wrap;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="styled-container svelte-1vmg9nx"><h1 class="svelte-1vmg9nx">${escape(data.name)}</h1>
	<img${add_attribute("src", urlFor(data.mainImage).width(500).fit("crop").url(), 0)}${add_attribute("alt", data.shortDescription, 0)} class="svelte-1vmg9nx">
	${validate_component(PortableText, "PortableText").$$render($$result, { value: data.longDescription }, {}, {})}
	
	</section>
${data.steps ? `<section class="styled-container svelte-1vmg9nx"><h2 class="svelte-1vmg9nx">Steps In Our Process</h2>
	<div class="steps-container svelte-1vmg9nx">${each(data.steps, (step) => {
    return `${validate_component(Step, "Step").$$render($$result, { step }, {}, {})}`;
  })}</div></section>` : ``}`;
});
export {
  Page as default
};
