import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Phone() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="m-10">
      <div className="flex justify-center mb-4">
        <Image src={data.thumbnail} width={600} height={400} />
      </div>

      <h1 className="text-3xl flex justify-center font-bold items-center">
        {data.brand} {data.title}{" "}
        <span className="bg-gray-700 p-1 text-sm ml-8 font-normal">
          Stock : {data.stock}
        </span>
      </h1>
      <div className="text-2xl flex justify-center font-bold text-yellow-500">
        $ {data.price}
      </div>
      <div>{data.description}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const paths = data.products.map((item) => ({
    params: { id: String(item.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();

  return { props: { data } };
}
