import React, { Component } from "react";
import axios from "axios";

export default class LoginService {
  static createUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = axios.post(
        "http://localhost:8080/signup",
        JSON.stringify(user),
        config
      );

      return response;
    } catch (error) {
      console.log(error);
    }

    return false;
  }

  static verifyLoginDetails(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = axios.post(
        "http://localhost:8080/login",
        JSON.stringify(user),
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static verifyEmail(email) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = axios.get(
        "http://localhost:8080/login/" + email,

        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static updatePassword(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = axios.post(
        "http://localhost:8080/update-password",
        JSON.stringify(user),
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static forgotPassword(email) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = axios.get(
        "http://localhost:8080/login/forgot-pass/" + email,

        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
