import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "*.md", base: "../docs" }),
});

const templates = defineCollection({
  loader: glob({ pattern: "*.md", base: "../templates" }),
});

const checklists = defineCollection({
  loader: glob({ pattern: "*.md", base: "../checklists" }),
});

export const collections = {
  checklists,
  docs,
  templates,
};
