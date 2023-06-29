import { Container,Box } from "@mui/material"


const SingleEventContainer = ({ children }) => {

    return <>
        <Box sx={{ width: '75%',margin:'0 auto',  display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',borderRadius:'30px' }}>
         

            {children}

          
        </Box>
    </>
}

export default SingleEventContainer