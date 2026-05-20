import { create } from "zustand";
import axios from "axios";
import API_BASE from "../config/api";

axios.defaults.withCredentials = true;

export const useAuth = create((set) => ({

  currentUser: null,
  loading: true,
  error: null,

  // LOGIN
  login: async (userCredObjWithRole) => {

    const { role, ...userCredObj } = userCredObjWithRole;

    try {

      set({
        loading: true,
        error: null
      });

      const res = await axios.post(
        `${API_BASE}/common-api/login`,
        userCredObj,
        { withCredentials: true }
      );

      set({
        currentUser: res.data.payload,
        loading: false,
        error: null
      });

      return true;

    } catch (err) {

      set({
        currentUser: null,
        loading: false,
        error: err
      });

      return false;

    }

  },

  // LOGOUT
  logout: async () => {

    try {

      await axios.get(
        `${API_BASE}/common-api/logout`,
        { withCredentials: true }
      );

    } catch (err) {

      console.log(err);

    }

    set({
      currentUser: null,
      loading: false,
      error: null
    });

  },

  // CHECK AUTH
  checkAuth: async () => {

    try {

      set({
        loading: true,
        error: null
      });

      const res = await axios.get(
        `${API_BASE}/common-api/check-auth`,
        { withCredentials: true }
      );

      set({
        currentUser: res.data.payload,
        loading: false,
        error: null
      });

    } catch (err) {

      set({
        currentUser: null,
        loading: false,
        error: err
      });

    }

  }

}));