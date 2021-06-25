import {Container, Grid, GridItem} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type DashboardPageProps = {
    drawer: ReactNode,
    breadcrumb: ReactNode,
}

export default function DashboardPage<T extends DashboardPageProps>(props: React.PropsWithChildren<T>){
    return (
        <Container maxW="container.lg" centerContent>
            <Grid templateColumns="repeat(5, 1fr">
                <GridItem colSpan={1}>
                    {props.drawer}
                </GridItem>
                <GridItem colSpan={4}>
                    {props.breadcrumb}
                    {props.children}
                </GridItem>
            </Grid>
        </Container>
    )
}