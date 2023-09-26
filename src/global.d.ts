import { blogSchema } from "./content/config"
import {z} from "astro:content";


export {}

declare global {
    type BlogData = z.infer<typeof blogSchema>
}
