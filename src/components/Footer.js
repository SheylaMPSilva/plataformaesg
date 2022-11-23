import { Box, Container, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { borderTop, containerClasses } from "@mui/system"

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `2px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(3),
        paddingBotton: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBotton: theme.spacing(6), 
        }
    }
}))



const Footer = () => {
    const classes = useStyles()

return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    FAQ
                </Box>
            </Grid>    
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                BLOG
                </Box>
            </Grid> 
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
               DICAS
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                CONTATO
                </Box>
            </Grid>           
        </Grid>  
    </Container>

)

}

export default Footer