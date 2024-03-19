import supabase from "../services/supabase";
import { products } from "./data-products";
import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { reviews } from "./data-reviews";
import { categories } from "./data-categories";
async function createProducts() {
  const { error } = await supabase.from("products").insert(products);
  if (error) console.log(error.message);
}
async function createReviews() {
  const { error } = await supabase.from("reviews").insert(reviews);
  if (error) console.log(error.message);
}
async function createCategories() {
  const { error } = await supabase.from("categories").insert(categories);
  if (error) console.log(error.message);
}
// async function deleteProducts() {
//   const { error } = await supabase.from("products").delete().gt("id", 0);
//   if (error) console.log(error.message);
// }
function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  // async function uploadAll() {
  //   setIsLoading(true);
  //   // Bookings need to be deleted FIRST

  //   await deleteProducts();

  //   // Bookings need to be created LAST
  //   await createProducts();

  //   setIsLoading(false);
  // }

  async function uploadProducts() {
    setIsLoading(true);

    // await deleteProducts();
    await createProducts();

    setIsLoading(false);
    toast.success("uploaded successfully !");
  }
  async function uploadReviews() {
    setIsLoading(true);

    // await deleteProducts();
    await createReviews();

    setIsLoading(false);
    toast.success("uploaded successfully !");
  }
  async function uploadCategories() {
    setIsLoading(true);

    // await deleteProducts();
    await createCategories();

    setIsLoading(false);
    toast.success("uploaded successfully !");
  }
  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      {/* <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button> */}

      <Button onClick={uploadProducts} disabled={isLoading}>
        Upload Products
      </Button>
      <Button onClick={uploadReviews} disabled={isLoading}>
        Upload Reviews
      </Button>
      <Button onClick={uploadCategories} disabled={isLoading}>
        Upload categories
      </Button>
    </div>
  );
}

export default Uploader;
