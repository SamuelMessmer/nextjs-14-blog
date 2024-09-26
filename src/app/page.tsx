import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  //damit data weiss, welchen Typ die Daten, die von der API gefetched werden haben und somit TS uns Fehlermeldungen geben kann sollten die Datentypen mal nicht übereinstimmen
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="sm:flex sm:flex-row sm:justify-center sm:items-center ">
      <div className="sm:grid sm:grid-cols-2 gap-4 md:gap-10 object-cover">
        {data.map((post, idx) => (
          <Card key={idx} className="border-none">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="Card Image"
              width={600}
              height={500}
              className="rounded-t-lg object-cover h-[200px]"
            />

            <CardContent className="mt-5">
              <h3 className="font-bold">{post.title}</h3>

              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>

              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
