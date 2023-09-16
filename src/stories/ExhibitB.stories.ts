import Parent, { ctx } from "../parent-b.twig"
import Twig from 'twig';

export default {
  title: "Example/Exhibit B",
};

export const WithInclude = {
  render: ({ ...args }) => {
    return Twig.twig({ data: ctx }).render(args)
  },
  args: {
    title: "Constant Sadness",
    detail: "An include on its own results in an error.",
  },
};
