import { siteConfig } from "@/config/site";

type Title =
    | string
    | {
          isAbsolute: boolean;
          text: string;
      };

interface Metadata {
    title: Title;
    description: string;
}

export function generateMetadata({ title, description }: Metadata) {
    let siteTitle: string;

    if (typeof title == "string") {
        siteTitle = title;
    } else {
        siteTitle = title.isAbsolute
            ? title.text
            : `${siteConfig.title} ${title.text}`;
    }

    return [{ title: siteTitle }, { description }];
}
