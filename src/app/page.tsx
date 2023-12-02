"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import socketIO from "@/lib/socket";

export default function Home() {
  const onClickMe = () => {
    socketIO.emit("greeting", { message: "Hello" });
  };
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={onClickMe}>Click me</Button>
    </div>
  );
}
