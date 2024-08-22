import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShoe } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Shoe } from "../../type";
import Head from "./head";
import Color from "./color";
import Size from "./size";


const Detail = () => {
  const { id } = useParams();
  //! console.log(id)

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });

console.log(data);

  return (
    <div className="mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && 
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit ">{data.picture.map((url,i)=><img key={i} src={url} />)}</div>
          <div className="flex flex-col gap-8 ">
            <Head data={data} />
            <Color data={data.color} />
            <Size data={data.size} />
            <p>
              <h2 className="text-2xl">Bu ürün hakkında</h2>
              <p className="font-open my-4"
              dangerouslySetInnerHTML={{ __html: data.description}}
              >

              </p>
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Detail;
