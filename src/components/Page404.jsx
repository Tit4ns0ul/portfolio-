import Layout from "./Layout";

const Page404 = () => {
  return (
    <Layout>
      <div className="w-full h-96 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-normal">
          The requested page is not found
        </h2>
        <a className="text-2xl font-bold underline" href="./">
          Go back to Homepage
        </a>
      </div>
    </Layout>
  );
};

export default Page404;
