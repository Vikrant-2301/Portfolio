import HomePage from '@/pages/HomePage'
import { personalMeta } from "@/lib/data";

export const metadata = {
  title: "Home",
  description: personalMeta.description,
};

export default function Home() {
  return (
    <HomePage />
  );
}