import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import ShopMain from "@/components/shop/ShopMain";
import Wrapper from "@/layout/DefaultWrapper";

const BREADCRUMB_HOME = "Acceuil";
const BREADCRUMB_SHOP = "Boutique";

const Shop = () => {
  return (
    <>
      <Wrapper>
        <main>
          <Breadcrumb breadHome={BREADCRUMB_HOME} breadMenu={BREADCRUMB_SHOP} />
          <ShopMain />
        </main>
      </Wrapper>
    </>
  );
};

export default Shop;
