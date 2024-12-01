"use client";

import onboarding1 from "@/assets/images/onboarding-1.png";
import onboarding2 from "@/assets/images/onboarding-2.png";
import MainButton from "@/components/ui/button/btn";
import { CustomModal } from "@/components/ui/customModal/customModal";
import { useModal } from "@/hooks/useModal/useModal";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

const customStyles = `
  .swiper-pagination {
    position: absolute;
    top: 50px !important;
    left: 150px !important;
    pointer-events: none; 

  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s ease;
    margin: 0 4px !important;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    height: 8px;
    background: white;
    border-radius: 4px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }


`;

const SliderPage = () => {
  // const [otp, setOtp] = useState("");
  // const handleChange = (otp) => setOtp(otp);
  // const theme = useTheme();
  const { isOpen, onClose, onOpen } = useModal();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleModalOpen = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop();
    }
    onOpen();
  };

  const handleModalClose = () => {
    onClose();
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "100dvh",
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "black",
          }}
        >
          <style>{customStyles}</style>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            dir="ltr"
            loop={true}
            allowTouchMove={true}
            autoplay={
              !isOpen
                ? {
                    delay: 2000,
                  }
                : false
            }
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <Image
                  src={onboarding1}
                  alt="Plant"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  bottom={50}
                  px="16px"
                  position="absolute"
                >
                  <Typography variant="h1Bold" color="white">
                    پاداش, آخرین مقصد سرمایه گذاری شماست
                  </Typography>
                  <Typography mt="4px" color="white" variant="subH1Regular">
                    یک مقصد کامل برای تمامی نیازهای مالی شما
                  </Typography>
                  <MainButton
                    onClick={handleModalOpen}
                    sx={{ mt: "40px" }}
                    fullWidth
                  >
                    ورود
                  </MainButton>
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  height: "100dvh",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <Image
                  src={onboarding2}
                  alt="Plant"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  bottom={50}
                  px="16px"
                  position="absolute"
                >
                  <Typography variant="h1Bold" color="white">
                    پاداش, آخرین مقصد سرمایه گذاری شماست
                  </Typography>
                  <Typography mt="4px" color="white" variant="subH1Regular">
                    یک مقصد کامل برای تمامی نیازهای مالی شما
                  </Typography>
                  <MainButton
                    onClick={handleModalOpen}
                    sx={{ mt: "40px" }}
                    fullWidth
                  >
                    ورود
                  </MainButton>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <CustomModal onClose={handleModalClose} open={isOpen}>
        سلام 123
      </CustomModal>
      {/* <Box width={350}>
        <OtpInput
          value={otp}
          containerStyle={{ direction: "ltr", gap: "10px", userSelect: "none" }}
          onChange={handleChange}
          numInputs={6}
          focusStyle={{
            border: "1px solid",
            borderColor: theme.palette.primary[300],
            outline: "none",
            backgroundColor: theme.palette.primary[50],
          }}
          inputStyle={{
            width: "48px",
            height: "48px",
            gap: "30px",
            border: "1px solid",
            borderColor: theme.palette.surface[500],
            boxShadow: "none",
            borderRadius: "12px",
            userSelect: "none",
          }}
          isInputNum
          shouldAutoFocus={true}
        />
      </Box> */}
    </>
  );
};

export default SliderPage;
