import Navbar from "@/components/Navbar";
import { FormLabel, Input, InputLabel } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto ">
          <form action="" className="border border-2">
            <h1 className="text-xl font-bold text-center mb-3">Sign Up</h1>
            <div>
              <InputLabel>Email</InputLabel>
              <Input type="text" name="name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
