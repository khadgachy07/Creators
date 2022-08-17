import { Web3Provider } from "@components/providers";
import { Footer, NavBar } from "@components/ui/common";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <div className="max-w-7xl mx-auto px-4">
        <NavBar />
        <div className="fit">{children}</div>
        <Footer />
      </div>
    </Web3Provider>
  );
}
