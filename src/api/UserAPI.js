import { get, headers, post } from 'api';
import { BaseSetting } from '../utils/common';
const apis = {
  // signIn: async (name, password) => {
  //   try {
  //     if (navigator.onLine) {
  //       const response = await get(BaseSetting.adminApiDomain + "/login", headers, {
  //         username: name,
  //         password,
  //       });
  //       return response.data;
  //     } else {
  //     }
  //   } catch (error) {}
  // },
  // logout: async (token) => {
  //   try {
  //     if (navigator.onLine) {
  //       const response = await post(
  //         BaseSetting.adminApiDomain + "/logout",
  //         {},
  //         {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           Authorization: "Bearer " + token,
  //         }
  //       );
  //       return response.data;
  //     } else {
  //     }
  //   } catch (error) {}
  // },
  // getActiveStaffs: async (token) => {
  //   try {
  //     if (navigator.onLine) {
  //       const response = await get(
  //         BaseSetting.adminApiDomain + "/get-active-staffs",
  //         {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           Authorization: "Bearer " + token,
  //         }
  //       );
  //       return response.data;
  //     } else {
  //     }
  //   } catch (error) {}
  // },
};

export default apis;
