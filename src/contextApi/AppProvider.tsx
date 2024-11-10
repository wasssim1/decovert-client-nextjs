"use client";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ProductType,
  TeamMember,
  blogDataType,
} from "@/interFace/api-interFace";
import {
  AppContextType,
  IUser,
  SellProductInfoType,
} from "@/interFace/interFace";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [productLoading, setProductLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [myProducts, setMyProducts] = useState<ProductType[]>([]);
  const [paymentProducts, setPaymentProducts] = useState<SellProductInfoType[]>(
    []
  );
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  // wishlist states
  const [showSidebarWishlist, setShowSidebarWishlist] =
    useState<boolean>(false);
  const [openWishlist, setOpenWishlist] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<blogDataType[]>([]);
  const [teamList, setTeamList] = useState<TeamMember[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  const [dynamicId, setDynamicId] = useState<string>("");
  const [totalProduct, setTotalProduct] = useState<number>(0);

  const token = localStorage.getItem("accessToken");
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (token || loggedIn) {
      axios
        .post(`${process.env.BASE_URL}user/get-user`, { token }, header)
        .then((res) => {
          if (res.data.data) {
            const userinfo = res.data.data;
            setLoggedIn(true);
            setUser(userinfo);
            setLoading(false);
            if (token) {
              const decodedToken: any = jwtDecode(token);
              const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds.
              const currentTime = Date.now();

              const timeUntilExpiration = expirationTime - currentTime;
              setTimeout(() => {
                logout();
              }, timeUntilExpiration);
            }
          }
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token, loggedIn, update]);

  useEffect(() => {
    if (user?.email) {
      setProductLoading(true);
      axios
        .get(
          `${process.env.BASE_URL}success/client-order-info?email=${user?.email}&page=${page}&limit=${limit}`
        )
        .then((res) => {
          setMyProducts(res.data.orderProduct);
          setTotalPages(res.data.totalPages);
          setCurrentPage(res.data.currentPage);
          setProductLoading(false);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user?.email, paymentSuccess, page, limit]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setLoading(false);
    setLoggedIn(false);
    setUser(undefined);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    showSidebar,
    setShowSidebar,
    user,
    setLoggedIn,
    setLoading,
    loading,
    logout,
    setUser,
    header,
    loggedIn,
    setProducts,
    products,
    openCart,
    setOpenCart,
    Paymentproducts: paymentProducts,
    setPaymentProducts,
    toggleModal,
    openModal,
    setOpenModal,
    modalId,
    setModalId,
    newComment,
    setNewComment,
    blog,
    setBlog,
    teamList,
    setTeamList,
    myproducts: myProducts,
    setMyProducts,
    paymentSuccess,
    setPaymentSuccess,
    currentPage,
    setcurrentPage: setCurrentPage,
    totalPages,
    setotalPages: setTotalPages,
    page,
    setPage,
    limit,
    showSidebarWishlist,
    setShowSidebarWishlist,
    openWishlist,
    setOpenWishlist,
    prodcutLoadding: productLoading,
    setProdcutLoadding: setProductLoading,
    update,
    setUpdate,
    dynamicId,
    setDynamicId,
    totalProduct,
    settotalProduct: setTotalProduct,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
