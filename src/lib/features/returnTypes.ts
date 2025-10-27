import { Doc } from "../../../convex/_generated/dataModel";

export type BlogPostType = Doc<"posts"> & {
    category: Doc<"postCategories"> | null;
};
