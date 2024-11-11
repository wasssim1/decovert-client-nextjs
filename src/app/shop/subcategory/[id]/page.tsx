"use client";
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import ShopMain from "@/components/shop/ShopMain";
import Wrapper from "@/layout/DefaultWrapper";

const SubCategoryWizeProductPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
          <Breadcrumb breadHome="Home" breadMenu="Shop" />
          <ShopMain />
        </main>
      </Wrapper>
    </>
  );
};

export default SubCategoryWizeProductPage;
