import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "../../components/Form"

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 10000px)");

    return <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%">
        <Box>
            <Typography
                fontWeight="bold"
                fontSize="32px"
                color="primary"
            ></Typography>
        </Box>
        <Box width={isNonMobileScreens ? "50%" : "83%"} p="2rem" m="2rem auto" borderRadius="1.25rem" backgroundColor={theme.palette.background.alt}>
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                Welcome to my social media app
            </Typography>
        </Box>
        <Form />
    </Box>
}

export default LoginPage;