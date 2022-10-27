import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import {
  PostCard,
  Categories,
  PostWidget,
  Footer,
  Loader,
} from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../components";

export default function Home({ posts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-[5%] sm:px-10 mb-8 ">
      <Head>
        <title>React blog</title>
        <link rel="icon" href="/icons8-react-100.png" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 ">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
