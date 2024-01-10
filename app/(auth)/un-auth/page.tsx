"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UnAuthPage = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.replace("/sign-in");
    }, 5000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [history]);

  return (
    <div>
      <h1>Unauthenticated Page</h1>
      <p>You are not authorized to access this page.</p>
      <p>You will be redirected to the login page in 5 seconds...</p>
    </div>
  );
};

export default UnAuthPage;
