import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/list-project">List Project</Link>
    </div>
  );
};

export default Home;
