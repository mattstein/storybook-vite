import Parent, { ctx } from "../parent-a.twig"
import Twig from 'twig';

export default {
  title: "Example/Exhibit A",
};

export const WithoutInclude = {
  render: ({ ...args }) => {
    return Twig.twig({ data: ctx }).render(args)
  },
  args: {
    title: "No Include = Happy",
    detail: "Without an include, everything seems fine.",
    enableInclude: false,
  },
};

export const ConditionalInclude = {
  render: ({ ...args }) => {
    return Twig.twig({ data: ctx }).render(args)
  },
  args: {
    title: "Conditional Include = Mixed Feelings",
    detail: "An include in a condition never manages to show up.",
    enableInclude: true,
  },
};
