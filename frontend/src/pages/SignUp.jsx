import React, { useState } from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import ThemeToggle from "../components/ThemeToggle";
import { useThemeProvider } from "../utils/ThemeContext";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import { login } from "../api/login";
import { signUp } from "../api/signUp";

export default function SignUp() {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();
  const navigate = useNavigate();
  const [bannerOpen, setBannerOpen] = useState(false);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-slate-800 border border-transparent dark:border-slate-700 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className="text-slate-500 inline-flex">
              Password does not match!
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px",
            "--Cover-width": "50vw",
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s",
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(19 19 24 / 0.4)"
              : "rgba(255 255 255 / 0.2)",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "left",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography
                level="title-lg"
                textColor={currentTheme === "dark" ? "white" : ""}
              >
                PID 01
              </Typography>
            </Box>
            <ThemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2, textAlign: "center" }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formElements = event.currentTarget.elements;
                  const data = {
                    emailid: formElements.email.value,
                    password: formElements.password.value,
                    description: formElements.description.value,
                    address: formElements.address.value,
                    name: formElements.name.value,
                    phone_number: formElements.contact.value,
                    username: formElements.username.value,
                  };
                  if (data.password !== formElements.confirmPassword.value) {
                    setBannerOpen(true);
                  } else {
                    signUp(data).then((res) => {
                      if (res === 201) {
                        navigate("/");
                      } else {
                        setBannerOpen(true);
                      }
                    });
                  }
                }}
              >
                <FormControl required>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" name="username" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Company Name</FormLabel>
                  <Input type="text" name="name" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Address</FormLabel>
                  <Input type="text" name="address" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Bio</FormLabel>
                  <Input type="text" name="description" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Contact Number</FormLabel>
                  <Input type="number" name="contact" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" name="confirmPassword" />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Link level="title-sm" href="/signin">
                    Exsiting User?
                  </Link>
                  <Button type="submit" fullWidth>
                    Sign Up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © PID-01 {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: theme.palette.background.level1,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            currentTheme === "dark"
              ? "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)"
              : "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
        })}
      />
    </>
  );
}
