 
 

"use client";
import React, { useState, useEffect } from "react";
import GridIcon from "@/svg/GridIcon";
import ListIcon from "@/svg/ListIcon";
import axios from "axios";
import useGlobalContext from "@/hooks/use-context";
import ShopSidebarCategories from "../ShopSidebarCategories";
import ShopSidebarRetting from "../ShopSidebarRatings";
import FlashBanner from "@/components/elements/product/FlashBanner";
import NiceSelect from "@/components/common/NiceSelect";
import GridViewProduct from "../GridViewProduct";
import ListViewProduct from "../ListViewProduct";
import Pagination from "@/components/elements/product/Pagination";
import PaginationTwo from "@/components/elements/product/PaginationTwo";
import ProductModal from "../ProductModal";
interface propsType{
    category:string
}
const ShopSectionCategoryWize = ({category}:propsType) => {
  const {
    products,
    setProducts,
    setotalPages,
    totalPages,
    setcurrentPage,
    currentPage,
    limit,
    page,
    setPage,
    setProdcutLoadding,
  } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [apiEndPoint, setapiEndPoint] = useState<string>("");
  

  const menuData = [
    {
      id: 1,
      text: "New Arrival",
      api: "new-arrival",
    },
    {
      id: 2,
      text: "Best Sale",
      api: "best-selling-products",
    },
    {
      id: 3,
      text: "Trending",
      api: "trending-products",
    },
    {
      id: 4,
      text: "Offers",
      api: "offer-products",
    },
  ];

  const handleInputChange = (e: any) => {
    setProdcutLoadding(true);
    setSearchValue(e.target.value);

    axios
      .get(
        `${process.env.BASE_URL}product/search-products?search=${searchValue}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setProducts(res.data.products);
        setotalPages(res.data.totalPages);
        setcurrentPage(res.data.currentPage);
        setProdcutLoadding(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${process.env.BASE_URL}product/search-products?search=${category}&page=${page}&limit=${limit}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setotalPages(res.data.totalPages);
          setcurrentPage(res.data.currentPage);
          setPage(1);
        })
        .catch((e) => console.log(e));
    }
  }, [
    category,
    setProducts,
    setotalPages,
    setcurrentPage,
    page,
    limit,
    setPage,
  ]);
 
  useEffect(() => {
    setProdcutLoadding(true);
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}product/${apiEndPoint}`
        );
        setProducts(response.data);
        setProdcutLoadding(false);
      } catch (error) {
        console.error(error);
      } finally {
        setProdcutLoadding(false);
      }
    }

    fetchData();
  }, [apiEndPoint, setProducts, setProdcutLoadding]);

  const selectHandler = () => {};

  console.log(products)

  return (
    <>
      <section className="bd-shop__area pt-115 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="bd-sidebar__widget-warpper mb-60">
                <div className="bd-product__filters">
                  <ShopSidebarCategories />
                  <ShopSidebarRetting />
                  <FlashBanner />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="row">
                <div className="col-xl-4">
                  <div className="bd-top__filter-search p-relative mb-30">
                    <form className="bd-top__filter-input" action="#">
                      <input
                        type="text"
                        placeholder="Search keyword..."
                        value={searchValue}
                        onChange={handleInputChange}
                      />
                      <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="bd-filter__tab-inner mb-30">
                    <div className="bd-top__filter">
                      <div className="bd-Product__tab pl-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <GridIcon />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="shop-filter-bar"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <ListIcon />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-sort__type-filter">
                      <NiceSelect
                        options={menuData}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="sorting-list"
                        setapiEndPoint={setapiEndPoint}
                        className="sorting-list"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="bd-shop__wrapper">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="bd-trending__item-wrapper">
                          <div className="row">
                            <GridViewProduct
                              products={products}
                              limit={limit}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="shop-filter-bar"
                      >
                        <div className="row">
                          <div className="col-xxl-12">
                            <ListViewProduct
                              products={products}
                              limit={limit}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {products?.length >= limit ? (
                <div className="row justify-content-center">
                  <div className="col-xxl-12">
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      setPage={setPage}
                      Pagination_space="d-flex justify-content-center mt-40  mb-45"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="row justify-content-center">
                    <div className="col-xxl-12">
                      <PaginationTwo
                        totalPages={1}
                        currentPage={1}
                        setPage={setPage}
                        Pagination_space="d-flex justify-content-center mt-40  mb-45"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <ProductModal />
    </>
  );
};

export default ShopSectionCategoryWize;
