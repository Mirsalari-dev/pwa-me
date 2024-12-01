"use client";

import MainButton from "@/components/ui/button/btn";
import { useTransitionRouter } from "next-view-transitions";

export default function HomePage() {
  const router = useTransitionRouter();

  return (
    <>
      <div>
        <MainButton
          onClick={() => router.push("/")}
          variant="contained"
          size="large"
        >
          سلام
        </MainButton>
      </div>
    </>
  );
}
