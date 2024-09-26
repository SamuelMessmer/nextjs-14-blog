import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { get } from "http";

import Image from "next/image";

async function getData(slug: string) {
  const query = `
   *[_type == "blog" && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({params}: {params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  console.log(data);

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1>
        <span className="block text-base text-primary font-semibold tracking-wide text-center uppercase">
          Jan Marshal - Blog
        </span>
        <span className="block mt-2 text-3xl text-center leading-8 tracking-tight sm:text-4xl font-bold">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="picture"
        className="rounded-lg mt-8 h-[400px]"
      />

      <div className="mt-16 prose-blue prose-xl mx-4 sm:mx-2 md:mx-0 prose-li:marker:text-primary">
        <PortableText value={data.content}/>
      </div>
    </div>
  );
}
