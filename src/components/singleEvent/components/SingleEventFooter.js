import { Box, Typography, Toolbar, Container, AppBar } from "@mui/material"
import CustomButton from '../../utils/components/CustomButton'
import { useRegistrationManager } from '../hooks/useRegistrationManager'

const SingleEventFooter = ({ footerData }) => {
    const { title } = footerData
    const { btnText,
        isRegistered,
        isLoading,
        handleOnClick } = useRegistrationManager()
    const userId = localStorage.getItem("userId")




    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{ top: "auto", bottom: 0, backgroundColor: "white" }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: "flex", justifyContent: "space-between", margin: '0 auto', padding: '20px 0', width: '90%' }}

                >
                    <Box>
                        <Typography variant="h4" component="div" sx={{ textTransform: 'capitalize', color: 'primary.main' }}>
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <CustomButton type="button" sx={{
                            width: '90px',
                            borderRadius: '30px',
                            padding: '10px 60px'
                        }} onClick={() => handleOnClick(userId)}>
                            {btnText}
                        </CustomButton >
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default SingleEventFooter
