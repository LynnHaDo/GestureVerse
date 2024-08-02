import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  return (
    <>
      <BackgroundFill color={colors.brown} />
      
      <TextBlock position="bottom_middle" textAlign="center">
        <Chapter filename="sierravalley">
          <Section>
            <p>
              Sierra Valley is part of the continental crust that was dropped by
              the same faulting that raised the Sierra Nevada. The overlook on
              Highway 49, east of Yuba Pass, provides a spectacular panoramic
              view of this beautiful sub-alpine valley where Sattley, Calpine,
              Sierraville and Loyalton lie surrounded by the granitic mountains
              of the Sierra Nevada. The scenery in Sierra Valley varies from
              conifer and aspen forests, to drier woodland forests, to a large
              valley covered with crops, pastures, and wildflowers in the
              spring. Go{"  "}
              <Nav text="back" next="right" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};
