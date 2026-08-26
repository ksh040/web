import type { OnboardingPageProps } from "./page_types.ts"
import styles from "./OnboardingPages.module.css";

import background from "../assets/onboarding/onboarding_02_background.png"
import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import { OnboardingActions } from "../components/OnboardingActions.tsx";
import { Box } from "../components/Box.tsx";
import organizeImage from "../assets/onboarding/onboarding_03_organize_card_image.png";
import readImage from "../assets/onboarding/onboarding_03_read_card_image.png";
import rememberImage from "../assets/onboarding/onboarding_03_remember_card_image.png"

export function Onboarding03Page({ onNext, onSkip }: OnboardingPageProps) {
  return (
    <ScreenFrame label="온보딩 03" glowVariant="onboarding_03">
      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 이 페이지의 내용은 일반 div에 담습니다. */}
      <div className={styles.main_area}>
        <SkipButton onSkip={onSkip} />
        {/* 이 화면에서만 쓰는 문장은 굳이 새 컴포넌트로 쪼개지 않고 페이지에 둡니다. */}
        <div className={styles.headline_block}>
        <h1>먹고,<br/>고르고,<br/>발견한다.</h1>
        </div>
        <div className={styles.feature_box_list} aria-label="finote 학습 흐름">
          <Box title="Taste" description={"평소 좋아하는\n맛을 떠올리고"} imageSrc={readImage} imageAlt="펼쳐진 카드 오브젝트" variant="read" />
          <Box title="Choose" description={"나의 취향에 가까운\n디저트를 고르고"} imageSrc={organizeImage} imageAlt="돋보기 케이크" variant="organize" />
          <Box title="Discover" description={"지금까지 몰랐던\n나만의 디저트 취향을\n발견합니다"} imageSrc={rememberImage} imageAlt="박스안에 케이크" variant="remember" />
        </div>
        {/* 현재 첫 번째 안내 화면이며, 누르면 onNext가 실행됩니다. */}
        <OnboardingActions currentPage={2} variant="split" onNext={onNext} />
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}