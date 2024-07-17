import { render, screen } from "@testing-library/react";
import { BannerInfo } from "./banner-info";
import { BannerImage } from "./banner-image";
import { MediaBanner } from "./media-banner";
import { MediaBannerData } from "@/app/hooks/types";

const MOCK_DATA: MediaBannerData = {
  img: {
    src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
    alt: "Happy baby playing with a toy",
    caption: "Happy baby playing with a toy",
  },
  leadingText: "For all their firsts",
  heading: "Joyful play at every stage, ages 0-4",
  orientation: "right",
  button: {
    text: "Explore the Play Kits",
    href: "https://lovevery.com/products/the-play-kits/",
  },
};

describe("BannerInfo", () => {
  it("renders leading heading element", () => {
    render(<BannerInfo banner={MOCK_DATA} />);

    const leadingHeading = screen.getByRole("heading", { level: 4 });

    expect(leadingHeading).toHaveTextContent(MOCK_DATA.leadingText || "");
    expect(leadingHeading).toHaveClass("capitalize");
  });

  it("renders main heading elements", () => {
    render(<BannerInfo banner={MOCK_DATA} />);

    const mainHeading = screen.getByRole("heading", { level: 2 });
    const hiddenMainHeading = screen.getByRole("heading", {
      level: 1,
      hidden: true,
    });

    expect(mainHeading).toHaveTextContent(MOCK_DATA.heading || "");
    expect(hiddenMainHeading).toHaveTextContent(MOCK_DATA.heading || "");
    expect(mainHeading).not.toHaveClass("hidden");
    expect(hiddenMainHeading).toHaveClass("hidden");
  });

  it("renders call to action element", () => {
    render(<BannerInfo banner={MOCK_DATA} />);
    const mock_text = MOCK_DATA.button?.text as string;
    const button_CTA = screen.getByText(mock_text);

    expect(button_CTA).toHaveAttribute("href", MOCK_DATA.button?.href);
    expect(button_CTA).toHaveClass("capitalize");
  });
});

describe("BannerImage", () => {
  it("renders banner's image", () => {
    render(<BannerImage imageInfo={MOCK_DATA.img} />);
    const mock_alt_text = MOCK_DATA.img?.alt as string;
    const image = screen.getByRole("img");

    expect(image).toHaveClass("object-cover");
    expect(image).not.toHaveAccessibleDescription(mock_alt_text);
  });

  it("renders fallback", () => {
    render(<BannerImage />);

    const image = screen.getByRole("img");
    const label = screen.getByText("no image");

    expect(label).toBeInTheDocument();
    expect(image).toContainElement(label);
  });
});

describe("MediaBanner", () => {
  it("renders the media banner with BannerInfo and BannerImage", () => {
    render(<MediaBanner mediaBannerData={MOCK_DATA} />);
    const image = screen.getByRole("img");
    const button_CTA = screen.getByRole("button");
    const hiddenHeading = screen.getByRole("heading", { level: 1 });

    expect(image).toHaveClass("object-cover");
    expect(button_CTA).toHaveAttribute("href", MOCK_DATA.button?.href);
    expect(hiddenHeading).toHaveClass("hidden");
  });
});
