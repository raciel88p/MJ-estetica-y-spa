import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            className="rounded-xl w-full"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />;
}
