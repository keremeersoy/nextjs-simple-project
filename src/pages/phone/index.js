import Link from "next/link";
import Image from "next/image";

export default function AllPhones({ data }) {
  return (
    <div>
      <h1>All Phones</h1>

      <div className="grid grid-cols-4 gap-10 m-10">
        {data.products.map((phone) => (
          <Link
            href={`/phone/${phone.id}`}
            className="bg-[#202020] p-4 rounded-md"
            key={phone.id}
          >
            <div className="">
              <div className="h-72 ">
                <Image
                  className="w-full rounded-md"
                  src={phone.thumbnail}
                  width={300}
                  height={500}
                />
              </div>
              <div className="flex items-center justify-center mb-2">
                <h1>
                  <span className="text-gray-400">{phone.brand}</span>{" "}
                  {phone.title}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-2xl">$ {phone.price}</div>
                <div className="text-yellow-500 flex items-center gap-4">
                  <div>{phone.rating}</div>
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{" "}
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
