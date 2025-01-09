import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

export const useUserStore = create((set) => ({
  user: null,
  signupLoading: false,
  signinLoading: false,
  checkingAuth: true,
  checkAuthLoading: false,

  signup: async (fullname, email, password, country) => {
    set({ signUpLoading: true });

    if (!fullname || !email || !password || !country) {
      set({ signUpLoading: false });
      return;
    }

    try {
      const res = await axiosInstance.post("/auth/signup", {
        fullname,
        email,
        password,
        country,
      });
      set({ user: res.data.user, signUpLoading: false, checkingAuth: false });

      toast.success("Account created successfully");
    } catch (error) {
      console.error(error);
      set({ signUpLoading: false });
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ signUpLoading: false });
    }
  },


   login: async (email, password) => {
    set({ loginLoading: true });
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      set({ user: res.data.user, loginLoading: false, checkingAuth: false });

      toast.success("Logged in successfully");
    } catch (error) {
      console.error(error);
      set({ loginLoading: false });
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ loginLoading: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ user: null });
    } catch (error) {
      console.error(error);
      set({ loginLoading: false });
      toast.error(error.response.data.message || "Something went wrong");
    }
  },

    checkAuth: async () => {
    set({ checkingAuth: true, checkAuthLoading: true });
    try {
      const res = await axiosInstance.get("/auth/profile");
      set({
        user: res.data.user,
        checkingAuth: false,
        checkAuthLoading: false,
      });
    } catch (error) {
      console.error(error);
      set({ user: null, checkingAuth: false, checkAuthLoading: false });
    } finally {
      set({ checkAuthLoading: false });
    }
  },

}));
