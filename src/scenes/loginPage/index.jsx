import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form"

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 10000px)");

    return (
        <Box >
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >Welcome to my social media app
                </Typography>
            </Box>
            <Box width={isNonMobileScreens ? "50%" : "83%"} p="2rem" m="2rem auto" borderRadius="1.25rem" backgroundColor={theme.palette.background.alt}>
                <Typography fontWeight="500" variant="h2" sx={{ mb: "1.5rem" }}> Welcome!
                </Typography>
                <Form />
            </Box>
        </Box>)
}

export default LoginPage;