import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import ShopSectionCategoryWize from "@/components/shop/categoryWizeShop/ShopSectionCategoryWize";
import ShopMain from "@/components/shop/ShopMain";
import Wrapper from "@/layout/DefaultWrapper";

const ShopPageCategoryWize = ({ params }: { params: { category: string } }) => {
  const category = params.category;
  return (
    <>
      <Wrapper>
        <main>
          {/* <Breadcrumb breadHome="Home" breadMenu="Shop" /> */}
          {/* <ShopSectionCategoryWize category={category} /> */}
          <ShopMain />
        </main>
      </Wrapper>
    </>
  );
};

export default ShopPageCategoryWize;
