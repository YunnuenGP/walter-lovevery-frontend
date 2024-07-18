import { render, screen } from "@testing-library/react";
import { BannerContent } from "./banner-content";
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
    render(
      <BannerContent>
        <h4>{MOCK_DATA.leadingText}</h4>
      </BannerContent>,
    );

    const banner = screen.getByTestId("banner-content");
    const leadingHeading = screen.getByRole("heading", { level: 4 });

    expect(leadingHeading).toHaveTextContent(MOCK_DATA.leadingText as string);
    expect(banner).toContainElement(leadingHeading);
  });
});

describe("BannerImage", () => {
  it("renders banner's image", () => {
    render(
      <BannerImage
        src={MOCK_DATA.img?.src as string}
        alt={MOCK_DATA.img?.alt as string}
      />,
    );
    const mock_alt_text = MOCK_DATA.img?.alt as string;
    const image = screen.getByRole("img");

    expect(image).toHaveClass("object-cover");
    expect(image).not.toHaveAccessibleDescription(mock_alt_text);
  });

  // TODO: Renders on error
  it("renders fallback", () => {
    render(<BannerImage src="/resources/test.png" />);

    const image = screen.getByRole("img");
    const label = screen.getByRole("heading", { level: 2 });

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Image not found");
    expect(image).toContainElement(label);
  });
});

describe("MediaBanner", () => {
  it("renders the media banner with BannerInfo and BannerImage", () => {
    render(
      <MediaBanner>
        <MediaBanner.Content>
          <h4>{MOCK_DATA.leadingText}</h4>
        </MediaBanner.Content>
        <MediaBanner.Image
          src={MOCK_DATA.img?.src as string}
          alt={MOCK_DATA.img?.alt as string}
        />
      </MediaBanner>,
    );
    const banner = screen.getByRole("article");
    const image = screen.getByRole("img");
    const leadingHeading = screen.getByRole("heading", { level: 4 });

    expect(image).toHaveClass("object-cover");
    expect(leadingHeading).toHaveTextContent(MOCK_DATA.leadingText as string);
    expect(banner).toContainElement(image);
    expect(banner).toContainElement(leadingHeading);
  });
});
